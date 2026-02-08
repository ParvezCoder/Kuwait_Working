import React from "react";

const cardStyles = {
  container: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
};

export const Card = ({ children }) => {
  return <div style={cardStyles.container}>{children}</div>;
};
