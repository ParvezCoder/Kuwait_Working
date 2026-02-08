import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import base64 from "base-64";
import dynamic from 'next/dynamic';

const SummernoteEditor = dynamic(
  () => import('../../components/summernoteeditor/summernote'), // Adjust the path as necessary
  { ssr: false } // Disable server-side rendering for this component
);

export default function AddPage() {
  const router = useRouter();
  const { type } = router.query;

  const [formData, setFormData] = useState({
    WebSitePageSerNo: 0, // User must ensure uniqueness
    IMAGEID: 0, // Image ID
    WebSiteShortName: "", // Title
    ArabicHTML: "", // Description
    EnglishHTML: "", // Redirect link or HTML file
    ElectronicForm1URL: "", // Optional
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = [{
        ...formData,
        MyWebSiteAutoGenID: 0,
        TenentID: 1,
        WebSiteID: type === "portfolio" ? 1 : 2, // Set based on type
        WebSitePageSubSerial: base64.encode("hello"),
        SortBy: 0,
        WebSiteIconMob: "N/A",
        WebSiteIconWeb: "N/A",
        WebArabic: "N/A",
        WebEnglish: "N/A",
        ElectronicForm1: "N/A",
        ElectronicForm2: "N/A",
        ElectronicForm2URL: "N/A",
        CRUP_ID: 0,
        USERID: "admin",
      },
    ];
      
      console.log("Payload being sent:", payload);
      console.log("Payload being sent:", JSON.stringify(payload, null, 2));

      const response = await axios.post(
        "https://newsysapi.crm53.com/api/Common/WebSiteContentInsert",
        payload,
        {
          headers: {
           
            "Content-Type": "application/json",
            "Accept": "text/plain, application/json"

          },
        }
      );

      console.log("API Response:", response.data);
      console.log("API Response:", response.status);

      if (response.status === 200) {
        router.push("/admin");
        localStorage.setItem("activeTab", type);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      console.error('Database error details:', {
        error: error.message,
        stack: error.stack,
      });
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Add {type?.charAt(0).toUpperCase() + type?.slice(1)}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>WebSitePageSerNo (Ensure it's unique)</label>
        <input name="WebSitePageSerNo" value={formData.WebSitePageSerNo} onChange={handleChange} required style={styles.input} type = {"number"}/>

        <label style={styles.label}>Image ID</label>
        <input name="IMAGEID" type="number" value={formData.IMAGEID} onChange={handleChange} required style={styles.input} />

        <label style={styles.label}>Title</label>
        <input name="WebSiteShortName" value={formData.WebSiteShortName} onChange={handleChange} required style={styles.input} />

        <label style={styles.label}>Description</label>
        <input name="ArabicHTML" value={formData.ArabicHTML} onChange={handleChange} required style={styles.input} />

        <label style={styles.label}>{type === "portfolio" ? "Redirect Link" : "HTML File"}</label>
        {type === "solutions" ? (
          <SummernoteEditor
          value={formData.EnglishHTML}
          onChange={(data) =>
            setFormData((prevData) => ({
              ...prevData,
              EnglishHTML: data
            }))
          }
        />
        ) : (
          <input
            name="EnglishHTML"
            onChange={handleChange}
            required
            style={styles.input}
          />
        )}

        <label style={styles.label}>Electronic Form 1 URL (Optional)</label>
        <input name="ElectronicForm1URL"  value={formData.ElectronicForm1URL} onChange={handleChange} style={styles.input} />

        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: { textAlign: "left", padding: "40px", backgroundColor: "#f4f4f4", minHeight: "100vh", maxWidth: "600px", margin: "auto" },
  title: { fontSize: "26px", fontWeight: "bold", marginBottom: "20px", color: "#002b5b", textAlign: "left" },
  form: { backgroundColor: "#ffffff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" },
  label: { fontSize: "16px", fontWeight: "bold", marginBottom: "5px", display: "block", color: "#333" },
  input: { width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" },
  submitButton: { backgroundColor: "#0073e6", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer", fontSize: "18px", display: "block", marginTop: "15px" }
};
