import React, { useEffect, useState } from "react";
import axios from "axios";

const sidebarStyles = {
  container: {
    width: "250px",
    height: "100vh",
    backgroundColor: "#2c3e50",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    position: "fixed",
    top: "0",
    left: "0",
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "10px",
    borderRadius: "8px",
    width: "100%",
    justifyContent: "center",
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: "#2c3e50",
    fontSize: "16px",
    textTransform: "uppercase",
  },
  name: {
    color: "white",
    fontSize: "16px",
  },
};

export const Sidebar = ({ children }) => {
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        // Get the logged-in admin username from localStorage
        const storedAdmin = typeof window !== "undefined" ? localStorage.getItem("loggedInAdmin") : null;

        if (storedAdmin) {
          setAdminName(storedAdmin);
        } else {
          // If not found in localStorage, fetch from API as a fallback
          const res = await axios.get("/api/admin");
          if (res.data.length > 0) {
            setAdminName(res.data[0].username);
          }
        }
      } catch (error) {
        console.error("Error fetching admin:", error);
      }
    };

    fetchAdmin();
  }, []);

  // Generate initials dynamically
  const getInitials = (name) => {
    if (!name) return "A"; // Default fallback
    return name
      .split(" ") // Split by spaces
      .map((word) => word[0]) // Take first letter of each word
      .join("")
      .toUpperCase(); // Convert to uppercase
  };

  return (
    <div style={sidebarStyles.container}>
      {/* Admin Profile Section */}
      <div style={sidebarStyles.profileContainer}>
        <div style={sidebarStyles.avatar}>{getInitials(adminName)}</div>
        <span style={sidebarStyles.name}>{adminName || "Admin"}</span>
      </div>

      {/* Sidebar Navigation Buttons */}
      {children}
    </div>
  );
};
