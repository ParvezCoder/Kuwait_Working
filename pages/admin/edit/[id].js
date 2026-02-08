import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function EditPage() {
  const router = useRouter();
  const { id, type } = router.query;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageId: "",
    redirectLink: "",
    filePath: "",
    formUrl: ""
  });

  useEffect(() => {
    async function fetchData() {
      if (!id || !type) return;

      try {
        const res = await axios.get(`/api/${type}`);
        const item = res.data.find(entry => entry.id == id);
        
        if (item) {
          setFormData({
            title: item.title || "",
            description: item.description || "",
            imageId: item.IMAGEID || "",
            redirectLink: item.redirectLink || item.filePath || "",
            filePath: item.filePath || item.redirectLink || "",
            formUrl: item.formUrl || ""
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [id, type]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/api/${type}`, { id, ...formData });
    router.push("/admin");
    localStorage.setItem("activeTab", type);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Edit {type?.charAt(0).toUpperCase() + type?.slice(1)}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Title</label>
        <input 
          name="title" 
          value={formData.title} 
          onChange={handleChange} 
          required 
          style={styles.input} 
        />
        
        <label style={styles.label}>Description</label>
        <textarea 
          name="description" 
          value={formData.description} 
          onChange={handleChange} 
          required 
          style={styles.textarea}
        ></textarea>

        <label style={styles.label}>Image ID</label>
        <input 
          name="imageId" 
          type="number" 
          value={formData.imageId} 
          onChange={handleChange} 
          required 
          style={styles.input} 
        />

        {type === "portfolio" ? (
          <>
            <label style={styles.label}>Redirect Link</label>
            <input 
              name="redirectLink" 
              value={formData.redirectLink} 
              onChange={handleChange} 
              required 
              style={styles.input} 
            />
          </>
        ) : (
          <>
            <label style={styles.label}>HTML File</label>
            <input 
              name="filePath" 
              value={formData.filePath} 
              onChange={handleChange} 
              required 
              style={styles.input} 
            />
          </>
        )}

        <label style={styles.label}>Form URL (optional)</label>
        <input 
          name="formUrl" 
          value={formData.formUrl} 
          onChange={handleChange} 
          style={styles.input} 
        />

        <button type="submit" style={styles.submitButton}>
          Update {type}
        </button>
      </form>
    </div>
  );
}

// Styles
const styles = {
  container: {
    textAlign: "left",
    padding: "40px",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    maxWidth: "600px",
    margin: "auto"
  },
  title: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#002b5b",
    textAlign: "left"
  },
  form: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "5px",
    display: "block",
    color: "#333"
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
    marginBottom: "5px"
  },
  textarea: {
    width: "100%",
    padding: "10px",
    height: "80px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
    resize: "none",
    marginBottom: "5px"
  },
  submitButton: {
    backgroundColor: "#0073e6",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
    display: "block",
    marginTop: "15px"
  }
};
