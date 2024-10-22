import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useStyles } from './styles';
import Boy from "../../Assets/boy.jpeg"
import Girl from "../../Assets/girl.webp"


const avatarOptions = [
  Boy, Girl
];

const sections = ['Profile Info', 'Education Details', 'More Details'];

// Helper function to format field labels
const formatFieldLabel = (field) => {
  // Special case for CGPA
  if (field === 'CGPAOrPercentage') return 'CGPA / Percentage';
  
  // Handle other cases
  return field
    // To add space between camelCase
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    // To Handle consecutive capital letters (acronyms)
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    // Capitalize first letter of each word
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const Profile = () => {
  const classes = useStyles();
  const [activeSection, setActiveSection] = useState('Profile Info');
  const [profile, setProfile] = useState({
    FullName: 'Ramakanth Kannuri',
    Gender: 'Male',
    Email: 'ramakanthkannuri@gmail.com',
    Contact: '+91 0000000000',
    Whatsapp: '+91 0000000000',
    FatherName: '-'
  });

  const [education, setEducation] = useState({
    HighestEducationQualification: 'Under Graduation',
    YearOfGraduation: '',
    Branch: '',
    CollegeUniversityName: '',
    CGPAOrPercentage: '',
    AdditionalCertificates: ''
  });

  const [moreInfo, setMoreInfo] = useState({
    GitHubEmailID: 'ramakanthram014@gmail.com',
    GithubProfile: 'https://github.com/ramakanth009',
    LinkedInProfileURL: '-',
    Resume: '-',
    MaskedResume: '-',
    AdditionalTechStack: ''
  });

  const [avatar, setAvatar] = useState('avatar1.png');
  const [editMode, setEditMode] = useState(null);
  const [showAvatarOptions, setShowAvatarOptions] = useState(false);

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    const savedEducation = JSON.parse(localStorage.getItem('education'));
    const savedMoreInfo = JSON.parse(localStorage.getItem('moreInfo'));
    const savedAvatar = localStorage.getItem('avatar');
    
    if (savedProfile) setProfile(savedProfile);
    if (savedEducation) setEducation(savedEducation);
    if (savedMoreInfo) setMoreInfo(savedMoreInfo);
    if (savedAvatar) setAvatar(savedAvatar);
  }, []);

  const saveToLocalStorage = () => {
    localStorage.setItem('profile', JSON.stringify(profile));
    localStorage.setItem('education', JSON.stringify(education));
    localStorage.setItem('moreInfo', JSON.stringify(moreInfo));
    localStorage.setItem('avatar', avatar);
  };

  const handleEditSave = (field, section) => {
    setEditMode(null);
    saveToLocalStorage();
  };

  const selectAvatar = (selectedAvatar) => {
    setAvatar(selectedAvatar);
    setShowAvatarOptions(false);
    saveToLocalStorage();
  };

  const renderEditableFields = (data, setData, section) => {
    return Object.entries(data).map(([field, value]) => (
      <Box key={`${section}-${field}`} className={classes.fieldContainer}>
        <Typography className={classes.label}>
          {formatFieldLabel(field)}:
        </Typography>
        <Box className={classes.value}>
          {editMode === `${section}-${field}` ? (
            <TextField
              value={value}
              onChange={(e) => setData({ ...data, [field]: e.target.value })}
              onBlur={() => handleEditSave(field, section)}
              autoFocus
              size="small"
            />
          ) : (
            <>
              <Typography>{value}</Typography>
              <Button
                className={classes.editButton}
                size="small"
                startIcon={<EditIcon />}
                onClick={() => setEditMode(`${section}-${field}`)}
              >
                Edit
              </Button>
            </>
          )}
        </Box>
      </Box>
    ));
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'Profile Info':
        return renderEditableFields(profile, setProfile, 'profile');
      case 'Education Details':
        return renderEditableFields(education, setEducation, 'education');
      case 'More Details':
        return renderEditableFields(moreInfo, setMoreInfo, 'moreInfo');
      default:
        return null;
    }
  };

  return (
    <Box className={classes.container}>
      {/* Left Panel */}
      <Box className={classes.leftPanel}>
        <Box className={classes.avatarSection}>
          <Avatar
            src={avatar}
            alt="User Avatar"
            className={classes.avatar}
            onClick={() => setShowAvatarOptions(!showAvatarOptions)}
          />
          <Button
            startIcon={<EditIcon />}
            onClick={() => setShowAvatarOptions(!showAvatarOptions)}
          >
            Edit Avatar
          </Button>

          {showAvatarOptions && (
            <Box className={classes.avatarGrid}>
              {avatarOptions.map((option, index) => (
                <Avatar
                  key={index}
                  src={option}
                  alt={`avatar-${index}`}
                  className={classes.avatarOption}
                  onClick={() => selectAvatar(option)}
                />
              ))}
            </Box>
          )}
        </Box>
      </Box>

      {/* Right Panel */}
      <Box className={classes.rightPanel}>
        <Box className={classes.navigationTabs}>
          {sections.map((section) => (
            <Typography
              key={section}
              className={`${classes.navTab} ${activeSection === section ? 'active' : ''}`}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </Typography>
          ))}
        </Box>
        <Box>{renderContent()}</Box>
      </Box>
    </Box>
  );
};

export default Profile;