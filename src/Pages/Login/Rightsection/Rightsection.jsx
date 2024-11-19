import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  InputAdornment,
  Alert,
} from "@mui/material";
import { Email, Lock } from "@mui/icons-material";
import { useStyles } from "./styles";
import Sunlogo from "../../../Assets/sunlogo.png";
import stroke from "../../../Assets/stroke.svg";

const RightSection = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const rememberedCreds = localStorage.getItem("rememberedCredentials");
    if (rememberedCreds) {
      const { email, password } = JSON.parse(rememberedCreds);
      setFormData(prev => ({
        ...prev,
        email,
        password,
        rememberMe: true
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rememberMe" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Username is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      let isValidUser = false;
      let userTrack = '';

      // Check credentials and determine user track
      if (formData.email === "fullstack" && formData.password === "sun") {
        isValidUser = true;
        userTrack = 'fullStack';
      } else if (formData.email === "datascience" && formData.password === "sun") {
        isValidUser = true;
        userTrack = 'dataScience';
      }

      if (isValidUser) {
        // Handle remember me
        if (formData.rememberMe) {
          localStorage.setItem("rememberedCredentials", JSON.stringify({
            email: formData.email,
            password: formData.password
          }));
          const expirationDate = new Date();
          expirationDate.setDate(expirationDate.getDate() + 30);
          localStorage.setItem("credentialsExpiration", expirationDate.toISOString());
        } else {
          localStorage.removeItem("rememberedCredentials");
          localStorage.removeItem("credentialsExpiration");
        }

        // Set auth token and user track
        localStorage.setItem("authToken", "dummy-token");
        localStorage.setItem("userTrack", userTrack);
        localStorage.setItem("userType", userTrack === 'fullStack' ? 'Full Stack Developer' : 'Data Scientist');

        navigate("/home");
      } else {
        setErrors({ auth: "Invalid username or password" });
      }
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setShowForgotPassword(true);
  };

  if (showForgotPassword) {
    return (
      <Box className={classes.rightSection}>
        <Box className={classes.rightContent}>
          <img src={Sunlogo} className={classes.logo} alt="sun e-learning" />
          <Box className={classes.form}>
            <Typography variant="h4" gutterBottom className={classes.formTitle}>
              Forgot Password
            </Typography>
            <Typography align="center" paragraph>
              Please contact your administrator for password assistance.
            </Typography>
            <Button
              fullWidth
              variant="contained"
              className={classes.loginButton}
              onClick={() => setShowForgotPassword(false)}
            >
              Back to Login
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box className={classes.rightSection}>
      <Box className={classes.rightContent}>
        <img src={Sunlogo} className={classes.logo} alt="sun e-learning" />

        <form className={classes.form} onSubmit={handleSubmit}>
          <Typography variant="h4" gutterBottom className={classes.formTitle}>
            Login your Account
          </Typography>

          {errors.auth && (
            <Alert severity="error" className={classes.errorMessage}>
              {errors.auth}
            </Alert>
          )}

          <TextField
            fullWidth
            name="email"
            label="USERNAME"
            variant="outlined"
            className={classes.textField}
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email sx={{ color: "#999" }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            name="password"
            label="PASSWORD"
            type="password"
            variant="outlined"
            className={classes.textField}
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock sx={{ color: "#999" }} />
                </InputAdornment>
              ),
            }}
          />

          <Box className={classes.rememberForgot}>
            <FormControlLabel
              control={
                <Checkbox
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label="Remember for 30 days"
            />
            <Link
              href="#"
              underline="hover"
              className={classes.forgotLink}
              onClick={handleForgotPassword}
            >
              Forgot password
            </Link>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.loginButton}
          >
            Login
          </Button>

          <Alert severity="info" className={classes.credentialsInfo}>
            <Typography variant="body2">
              Available login credentials:
              <br />
              <strong>Full Stack:</strong> username: fullstack, password: sun
              <br />
              <strong>Data Science:</strong> username: datascience, password: sun
            </Typography>
          </Alert>

          <Box className={classes.strokeWrapper}>
            <img
              src={stroke}
              className={classes.stroke}
              alt="decorative stroke"
            />
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default RightSection;