import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  card: {
    display: 'flex',        // Flexbox layout to split left and right sections
    alignItems: 'center',   // Align the contents of both sections vertically
    justifyContent: 'space-between',
    width: '33%',          // Full width of the card container
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    flexWrap: 'wrap',       // Ensure responsive wrapping on smaller screens
    gap: '20px',            // Space between left and right sections
  },
  leftSection: {
    width: '60%',           // Left section takes 60% of the card width
    display: 'flex',
    flexDirection: 'column', // Stack heading, paragraph, and button vertically
    justifyContent: 'center',
  },
  rightSection: {
    width: '40%',            // Right section takes 40% of the card width
    display: 'flex',
    justifyContent: 'center', // Center the top element
    alignItems: 'center',
  },
  heading: {
    marginBottom: '16px',
  },
  paragraph: {
    marginBottom: '24px',
  },
  topElement: {
    maxWidth: '100%',        // Ensure the top element (icon or image) adjusts responsively
    height: 'auto',          // Allow the height to auto-adjust
    fontSize: '40px',        // Adjust the icon size if using Material-UI icons
  },
}));
