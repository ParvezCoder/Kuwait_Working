import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const AddImage = () => {
    const router = useRouter();
    const { type } = router.query;

    const [formData, setFormData] = useState([
        {
        MyImagesAutoGenID: 0,
        TenentID: 1,
        ImagesID: 0,
        IMAGESUBID: "",
        SortBy: 0,
        EnglishImagesURL: "",
        ArabicImagesURL: "example.com",
        USERID: "",
    },
]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://newsysapi.crm53.com/api/Common/TableImageInsert",
                [formData]
            );
            console.log("Image added successfully:", response.data);
            alert("Image added successfully!");
            router.push("/admin"); 
            localStorage.setItem("activeTab", "images");
            
        } catch (error) {
            console.log("The sending data:", formData);
            console.log("The sending data2:", JSON.stringify(formData, null, 2));
            console.error("Error adding image:", error);
            alert("Failed to add image.");
        }
    };

    return (
        formData.TenentID = 1,
        <div style={styles.container}>
            <h1 style={styles.title}>Add Image</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div>
                    <label style={styles.label}>MyImageID:</label>
                    <input
                        type="number"
                        name="ImagesID"
                        placeholder="ImageID(ensure it's unique)"
                        value={formData.ImagesID}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
    
                <div>
                    <label style={styles.label}>IMAGESUBID:</label>
                    <input
                        type="text"
                        name="IMAGESUBID"
                        value={formData.IMAGESUBID}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
    
                <div>
                    <label style={styles.label}>English Images URL:</label>
                    <input
                        type="text"
                        name="EnglishImagesURL"
                        value={formData.EnglishImagesURL}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
    
                <div>
                    <label style={styles.label}>USERID:</label>
                    <input
                        type="text"
                        name="USERID"
                        value={formData.USERID}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.submitButton}>Add Image</button>
            </form>
        </div>
    );
};

export default AddImage;

const styles = {
    container: { textAlign: "left", padding: "40px", backgroundColor: "#f4f4f4", minHeight: "100vh", maxWidth: "600px", margin: "auto" },
    title: { fontSize: "26px", fontWeight: "bold", marginBottom: "20px", color: "#002b5b", textAlign: "left" },
    form: { backgroundColor: "#ffffff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" },
    label: { fontSize: "16px", fontWeight: "bold", marginBottom: "5px", display: "block", color: "#333" },
    input: { width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" },
    submitButton: { backgroundColor: "#0073e6", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer", fontSize: "18px", display: "block", marginTop: "15px" }
};

