import React from "react";

const avatarStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    backgroundColor: "#34495e",
    borderRadius: "6px",
  },
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
  name: {
    color: "white",
    fontSize: "16px",
  },
};

export const Avatar = ({ name }) => {
  return (
    <div style={avatarStyles.container}>
      <img src={`https://ui-avatars.com/api/?name=${name}`} alt={name} style={avatarStyles.img} />
      <span style={avatarStyles.name}>{name}</span>
    </div>
  );
};
