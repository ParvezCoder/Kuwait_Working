import React from "react";

const buttonStyles = {
  base: {
    padding: "10px 16px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    transition: "background 0.3s, color 0.3s, border 0.3s",
    margin: "5px",
  },
  variants: {
    primary: {
      backgroundColor: "#3498db",
      color: "white",
    },
    secondary: {
      backgroundColor: "#2c3e50",
      color: "white",
    },
    danger: {
      backgroundColor: "#e74c3c",
      color: "white",
    },
    dangeroutline: {
      backgroundColor: "transparent",
      border: "2px solid #e74c3c",
      color: "#e74c3c",
    },
    outline: {
      backgroundColor: "transparent",
      border: "2px solid #3498db",
      color: "#3498db",
    },
  },
  hoverVariants: {
    outline: {
      backgroundColor: "#3498db",
      color: "white",
      border: "2px solid #3498db",
    },
    dangeroutline: {
      backgroundColor: "#e74c3c",
      color: "white",
      border: "2px solid #e74c3c",
    },
    danger: {
      backgroundColor: "#c0392b",
      color: "white",
    },
    secondary: {
      backgroundColor: "#1a252f",
      color: "white",
    },
    primary: {
      backgroundColor: "#2980b9",
      color: "white",
    },
  },
};

export const Button = ({ children, variant = "primary", onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const variantStyle = buttonStyles.variants[variant] || {};
  const hoverStyle = buttonStyles.hoverVariants[variant] || {};

  return (
    <button
      style={{
        ...buttonStyles.base,
        ...variantStyle,
        ...(isHovered ? hoverStyle : {}),
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};
