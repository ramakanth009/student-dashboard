import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  card: {
    display: "flex", // Flexbox layout to split left and right sections
    flexDirection: "row",
    alignItems: "center", // Align the contents of both sections vertically
    justifyContent: "space-between", // Ensure spacing between left and right
    width: "27%", // Full width of the card container
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#EBE9E9",
    gap: "10px", // Space between left and right sections
    overflow:"hidden"
  },
  leftSection: {
    width: "65%", // Left section takes 70% of the card width
    display: "flex",
    flexDirection: "column", // Stack heading, paragraph, and button vertically
    justifyContent: "center",
  },
  rightSection: {
    width: "35%", // Right section takes 30% of the card width
    display: "flex",
    justifyContent: "flex-end", // Align the sideElement to the right
    alignItems: "center", // Center the top element vertically
  },
  heading: {
    marginBottom: "16px",
  },
  paragraph: {
    marginBottom: "24px",
  },
  sideElement: {
    maxWidth: "100%", // Ensure the sideElement (icon or image) adjusts responsively
    height: "auto", // Allow the height to auto-adjust
    fontSize: "40px", // Adjust the icon size if using Material-UI icons
  },
}));
