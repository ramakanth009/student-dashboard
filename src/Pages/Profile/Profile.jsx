import React, { useState, useEffect } from "react";
import { Box, Typography, Button, TextField, Avatar } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

// Default avatars for selection
const avatarOptions = [
  "avatar1.png", "avatar2.png", "avatar3.png", "avatar4.png"
];

const Profile = () => {
  // Initialize states for profile information
  const [profile, setProfile] = useState({
    FullName: "Ramakanth Kannuri",
    Gender: "Male",
    Email: "ramakanthkannuri@gmail.com",
    Contact: "+91 0000000000",
    Whatsapp: "+91 0000000000",
    FatherName: "-"
  });

  // Initialize states for education details
  const [education, setEducation] = useState({
    HighestEducationQualification: "Under Graduation",
    YearOfGraduation: "",
    Branch: "",
    CollegeUniversityName: "",
    CGPAOrPercentage: "",
    AdditionalCertificates: ""
  });

  // Initialize states for more profile information
  const [moreInfo, setMoreInfo] = useState({
    GitHubEmailID: "ramakanthram014@gmail.com",
    GithubProfile: "https://github.com/ramakanth009",
    LinkedInProfileURL: "-",
    Resume: "-",
    MaskedResume: "-",
    AdditionalTechStack: ""
  });

  const [avatar, setAvatar] = useState("avatar1.png");
  const [editMode, setEditMode] = useState(null);
  const [showAvatarOptions, setShowAvatarOptions] = useState(false);

  // Load saved data from localStorage
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    const savedEducation = JSON.parse(localStorage.getItem("education"));
    const savedMoreInfo = JSON.parse(localStorage.getItem("moreInfo"));
    const savedAvatar = localStorage.getItem("avatar");
    if (savedProfile) setProfile(savedProfile);
    if (savedEducation) setEducation(savedEducation);
    if (savedMoreInfo) setMoreInfo(savedMoreInfo);
    if (savedAvatar) setAvatar(savedAvatar);
  }, []);

  // Save data to localStorage
  const saveToLocalStorage = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    localStorage.setItem("education", JSON.stringify(education));
    localStorage.setItem("moreInfo", JSON.stringify(moreInfo));
    localStorage.setItem("avatar", avatar);
  };

  // Handle edit save for each field
  const handleEditSave = (field, section) => {
    setEditMode(null);
    saveToLocalStorage();
  };

  // Handle avatar selection
  const selectAvatar = (selectedAvatar) => {
    setAvatar(selectedAvatar);
    setShowAvatarOptions(false);
    saveToLocalStorage();
  };

  // Render editable fields
  const renderEditableFields = (data, setData, section) => {
    return Object.keys(data).map((field) => (
      <Box key={`${section}-${field}`} sx={{ marginBottom: 2 }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {field.replace(/([A-Z])/g, " $1")}:
        </Typography>
        {editMode === `${section}-${field}` ? (
          <TextField
            value={data[field]}
            onChange={(e) =>
              setData({ ...data, [field]: e.target.value })
            }
            onBlur={() => handleEditSave(field, section)}
            autoFocus
            fullWidth
          />
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2">{data[field]}</Typography>
            <Button
              size="small"
              startIcon={<EditIcon />}
              onClick={() => setEditMode(`${section}-${field}`)}
            >
              Edit
            </Button>
          </Box>
        )}
      </Box>
    ));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 2 }}>
      <Box sx={{ display: "flex", gap: 2 }}>
        {/* Avatar Section */}
        <Box sx={{ textAlign: "center" }}>
          <Avatar
            src={avatar}
            alt="User Avatar"
            sx={{ width: 100, height: 100, margin: "0 auto" }}
          />
          <Button
            startIcon={<EditIcon />}
            onClick={() => setShowAvatarOptions(!showAvatarOptions)}
          >
            Edit Avatar
          </Button>

          {showAvatarOptions && (
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 1, 
              justifyContent: 'center', 
              marginTop: 2 
            }}>
              {avatarOptions.map((option, index) => (
                <Avatar
                  key={index}
                  src={option}
                  alt={`avatar-${index}`}
                  sx={{ 
                    cursor: "pointer", 
                    width: 50, 
                    height: 50,
                    '&:hover': {
                      boxShadow: '0 0 0 2px #1976d2',
                    },
                  }}
                  onClick={() => selectAvatar(option)}
                />
              ))}
            </Box>
          )}
        </Box>

        {/* Profile Information Section */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>Profile Information</Typography>
          {renderEditableFields(profile, setProfile, 'profile')}
        </Box>
      </Box>

      {/* Education Details Section */}
      <Box>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>Education Details</Typography>
        {renderEditableFields(education, setEducation, 'education')}
      </Box>

      {/* More Profile Information Section */}
      <Box>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>More Profile Information</Typography>
        {renderEditableFields(moreInfo, setMoreInfo, 'moreInfo')}
      </Box>
    </Box>
  );
};

export default Profile;