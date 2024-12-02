import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  TextField, 
  Avatar,
  Paper,
  IconButton,
  Tooltip,
  Badge,
  Grid,
  Divider,
  Card,
  CardContent
} from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InfoIcon from '@mui/icons-material/Info';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SchoolIcon from '@mui/icons-material/School';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { useStyles } from './styles';
import Boy from "../../Assets/boy.jpeg";
import Girl from "../../Assets/girl.webp";
import Progresstracking from "../../Components/Progresstracking/progresstracking"
import UserStats from '../../Components/Userstats/userstats';

const avatarOptions = [Boy, Girl];
const sections = [
  { id: 'Profile Info', icon: <AccountBoxIcon /> },
  { id: 'Education Details', icon: <SchoolIcon /> },
  { id: 'More Details', icon: <MoreHorizIcon /> }
];

const sectionDescriptions = {
  'Profile Info': 'Manage your personal information and contact details',
  'Education Details': 'Update your educational qualifications and achievements',
  'More Details': 'Add additional professional information and social links'
};

const formatFieldLabel = (field) => {
  if (field === 'CGPAOrPercentage') return 'CGPA / Percentage';
  return field
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const Profile = () => {
  const classes = useStyles();
  const [activeSection, setActiveSection] = useState('Profile Info');
  const [editMode, setEditMode] = useState(false);
  const [avatar, setAvatar] = useState(Boy);
  const [showAvatarOptions, setShowAvatarOptions] = useState(false);
  
  const [profile, setProfile] = useState({
    FirstName: '',
    LastName: '',
    Gender: '',
    Email: '@gmail.com',
    Contact: '+91 ',
    Whatsapp: '+91 '
  });

  const [tempProfile, setTempProfile] = useState({});

  const [education, setEducation] = useState({
    HighestEducationQualification: ' ',
    YearOfGraduation: '',
    Branch: ' ',
    CollegeUniversityName: '',
    CGPAOrPercentage: '',
    AdditionalCertificates: ' '
  });

  const [tempEducation, setTempEducation] = useState({});

  const [moreInfo, setMoreInfo] = useState({
    GitHubEmailID: '@gmail.com',
    GithubProfile: 'github.com/',
    LinkedInProfileURL: 'linkedin.com/in/',
    AdditionalTechStack: ''
  });

  const [tempMoreInfo, setTempMoreInfo] = useState({});

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

  const handleEditStart = () => {
    setEditMode(true);
    setTempProfile({ ...profile });
    setTempEducation({ ...education });
    setTempMoreInfo({ ...moreInfo });
  };

  const handleEditSave = () => {
    setProfile(tempProfile);
    setEducation(tempEducation);
    setMoreInfo(tempMoreInfo);
    
    localStorage.setItem('profile', JSON.stringify(tempProfile));
    localStorage.setItem('education', JSON.stringify(tempEducation));
    localStorage.setItem('moreInfo', JSON.stringify(tempMoreInfo));
    
    setEditMode(false);
  };

  const handleEditCancel = () => {
    setEditMode(false);
    setTempProfile({});
    setTempEducation({});
    setTempMoreInfo({});
  };

  const handleInputChange = (field, value, section) => {
    switch(section) {
      case 'profile':
        setTempProfile(prev => ({ ...prev, [field]: value }));
        break;
      case 'education':
        setTempEducation(prev => ({ ...prev, [field]: value }));
        break;
      case 'moreInfo':
        setTempMoreInfo(prev => ({ ...prev, [field]: value }));
        break;
      default:
        break;
    }
  };

  const selectAvatar = (selectedAvatar) => {
    setAvatar(selectedAvatar);
    setShowAvatarOptions(false);
    localStorage.setItem('avatar', selectedAvatar);
  };

  const isFieldEditable = (field) => {
    return !['Gender', 'Email'].includes(field);
  };

  const renderEditableFields = (data, tempData, section) => {
    return (
      <Grid container spacing={3}>
        {Object.entries(data).map(([field, value]) => (
          <Grid item xs={12} md={6} key={`${section}-${field}`}>
            <Card className={classes.fieldCard}>
              <CardContent className={classes.fieldContent}>
                <Typography variant="subtitle2" className={classes.fieldLabel}>
                  {formatFieldLabel(field)}
                </Typography>
                <Box className={classes.valueContainer}>
                  {editMode && isFieldEditable(field) ? (
                    <TextField
                      value={tempData[field] || value}
                      onChange={(e) => handleInputChange(field, e.target.value, section)}
                      size="small"
                      fullWidth
                      variant="outlined"
                      className={classes.editInput}
                    />
                  ) : (
                    <Typography variant="body1" className={classes.valueText}>
                      {value}
                    </Typography>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };

  const renderSectionInfo = () => (
    <Box className={classes.sectionInfo}>
      <Box className={classes.sectionHeader}>
        <Typography variant="h6" className={classes.sectionTitle}>
          {activeSection}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {editMode ? (
            <>
              <IconButton onClick={handleEditSave} color="primary" size="small">
                <SaveIcon />
              </IconButton>
              <IconButton onClick={handleEditCancel} color="error" size="small">
                <CloseIcon />
              </IconButton>
            </>
          ) : (
            <IconButton onClick={handleEditStart} color="primary" size="small">
              <EditIcon />
            </IconButton>
          )}
          <Tooltip title="Section Information" placement="top">
            <InfoIcon color="primary" className={classes.infoIcon} />
          </Tooltip>
        </Box>
      </Box>
      <Typography variant="body2" color="textSecondary" className={classes.sectionDescription}>
        {sectionDescriptions[activeSection]}
      </Typography>
      <Divider className={classes.sectionDivider} />
    </Box>
  );

  const renderContent = () => (
    <Box className={classes.contentWrapper}>
      {renderSectionInfo()}
      <Box className={classes.fieldsContainer}>
        {(() => {
          switch (activeSection) {
            case 'Profile Info':
              return renderEditableFields(profile, tempProfile, 'profile');
            case 'Education Details':
              return renderEditableFields(education, tempEducation, 'education');
            case 'More Details':
              return renderEditableFields(moreInfo, tempMoreInfo, 'moreInfo');
            default:
              return null;
          }
        })()}
      </Box>
    </Box>
  );

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.profileSection}>
        <Paper elevation={3} className={classes.leftPanel}>
          <Box className={classes.avatarSection}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={
                <IconButton 
                  className={classes.avatarEditButton}
                  onClick={() => setShowAvatarOptions(!showAvatarOptions)}
                >
                  <CameraAltIcon fontSize="small" />
                </IconButton>
              }
            >
              <Avatar
                src={avatar}
                alt="User Avatar"
                className={classes.avatar}
              />
            </Badge>
            <Typography variant="h6" className={classes.userName}>
              {`${profile.FirstName} ${profile.LastName}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" className={classes.userInfo}>
              {education.Branch} • {education.CollegeUniversityName}
            </Typography>
          </Box>
          
          {showAvatarOptions && (
            <Paper elevation={3} className={classes.avatarOptionsContainer}>
              <Typography variant="subtitle2" gutterBottom align="center">
                Choose Avatar
              </Typography>
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
            </Paper>
          )}

          <Divider className={classes.divider} />
          <UserStats />
        </Paper>

        <Paper elevation={3} className={classes.rightPanel}>
          <Box className={classes.navigationTabs}>
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "contained" : "outlined"}
                onClick={() => setActiveSection(section.id)}
                className={classes.navTab}
                startIcon={section.icon}
              >
                {section.id}
              </Button>
            ))}
          </Box>
          <Box className={classes.contentSection}>
            {renderContent()}
          </Box>
        </Paper>
      </Box>
      <Progresstracking/>
    </Box>
  );
};

export default Profile;