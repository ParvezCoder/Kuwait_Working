import React from "react";

const layoutStyles = {
  container: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#ecf0f1",
    fontFamily: "Arial, sans-serif",
  },
  content: {
    flexGrow: 1,
    padding: "40px",
    marginLeft: "250px", // ✅ This ensures content does not go behind sidebar
    overflowX: "auto", // ✅ Allows scrolling if content overflows
  },
}

export const Layout = ({ sidebar, children }) => {
  return (
    <div style={layoutStyles.container}>
      {sidebar}
      <div style={layoutStyles.content}>{children}</div>
    </div>
  );
};
