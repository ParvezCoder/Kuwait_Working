import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [email, setEmail] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isOldPasswordVerified, setIsOldPasswordVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const router = useRouter();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/admin-login", {
        username: credentials.username,  // This will map to LOGIN_ID in the backend
        password: credentials.password
      });
      
      if (res.data.success) {
        localStorage.setItem("isAdmin", "true");
        localStorage.setItem("loggedInAdmin", credentials.username); 
        router.push("/admin");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      alert("Login failed! Please try again.");
    }
  };

  const handleForgotPassword = async () => {
    try {
      const res = await axios.post("/api/forgot-password", { email });
      alert(res.data.message);
    } catch (error) {
      alert("Error resetting password!");
    }
  };

  const verifyOldPassword = async () => {
    try {
      const res = await axios.post("/api/verify-old-password", { 
        username: credentials.username,  // This will map to LOGIN_ID in the backend
        password: oldPassword 
      });
      
      if (res.data.success) {
        setIsOldPasswordVerified(true);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      alert("Error verifying old password!");
    }
  };

  const handleChangePassword = async () => {
    if (!oldPassword || !newPassword) {
      alert("Please enter both old and new passwords.");
      return;
    }
  
    try {
      console.log("Sending Change Password Request:", { 
        username: credentials.username, 
        oldPassword, 
        newPassword 
      });
  
      const res = await axios.post("/api/change-password", { 
        username: credentials.username,  // This will map to LOGIN_ID in the backend
        oldPassword: oldPassword, 
        newPassword: newPassword 
      });
  
      alert(res.data.message);
      if (res.data.success) {
        setShowChangePassword(false);
        setIsOldPasswordVerified(false);
      }
    } catch (error) {
      console.error("Error Changing Password:", error.response?.data || error);
      alert("Error changing password!");
    }
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.title}>Sign In</h2>

        {showForgotPassword ? (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            <button onClick={handleForgotPassword} style={styles.button}>
              Send Password Reset
            </button>
            <button onClick={() => setShowForgotPassword(false)} style={styles.linkButton}>
              Back to Login
            </button>
          </>
        ) : showChangePassword ? (
          <>
            {!isOldPasswordVerified ? (
              <>
                <div style={styles.passwordContainer}>
                  <input
                    type={showOldPassword ? "text" : "password"}
                    placeholder="Enter Old Password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    style={styles.input}
                  />
                  <button 
                    onClick={() => setShowOldPassword(!showOldPassword)} 
                    style={{ 
                      background: "transparent", 
                      border: "none", 
                      cursor: "pointer", 
                      fontSize: "20px",
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)"
                    }}
                  >
                    {showOldPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </button>
                </div>
                <button onClick={verifyOldPassword} style={styles.button}>
                  Verify Old Password
                </button>
              </>
            ) : (
              <>
                <div style={styles.passwordContainer}>
                  <input
                    type={showNewPassword ? "text" : "password"}
                    placeholder="Enter New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={styles.input}
                  />
                  <button 
                    onClick={() => setShowNewPassword(!showNewPassword)} 
                    style={{ 
                      background: "transparent", 
                      border: "none", 
                      cursor: "pointer", 
                      fontSize: "20px",
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)"
                    }}
                  >
                    {showNewPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </button>
                </div>
                <button onClick={handleChangePassword} style={styles.button}>
                  Change Password
                </button>
              </>
            )}
            <button onClick={() => setShowChangePassword(false)} style={styles.linkButton}>
              Back to Login
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Username"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              style={styles.input}
            />
            <div style={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                style={styles.input}
              />
              <button 
                onClick={() => setShowPassword(!showPassword)} 
                style={{ 
                  background: "transparent", 
                  border: "none", 
                  cursor: "pointer", 
                  fontSize: "20px",
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)"
                }}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>
            <button onClick={handleLogin} style={styles.button}>
              Sign In
            </button>

            <div style={styles.links}>
              {/* <button onClick={() => setShowForgotPassword(true)} style={styles.linkButton}>
                Forgot your password? 
              </button> */}
              {/* <br /> */}
              <button onClick={() => setShowChangePassword(true)} style={styles.linkButton}>
                Change Password
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Inline Styles
const styles = {
  container: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f4f4f4" },
  loginBox: { width: "400px", padding: "30px", borderRadius: "10px", backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", textAlign: "center" },
  title: { fontSize: "24px", marginBottom: "20px", color: "#333" },
  input: { width: "100%", padding: "10px", margin: "10px 0", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" },
  button: { width: "100%", padding: "10px", marginTop: "10px", backgroundColor: "#002b5b", color: "white", fontSize: "16px", borderRadius: "5px", cursor: "pointer" },
  linkButton: { background: "none", border: "none", color: "#007bff", cursor: "pointer", marginTop: "10px", fontSize: "14px" },
  passwordContainer: { position: "relative", display: "flex", alignItems: "center" },
  eyeButton: { position: "absolute", right: "10px", background: "none", border: "none", cursor: "pointer", fontSize: "16px" },
};