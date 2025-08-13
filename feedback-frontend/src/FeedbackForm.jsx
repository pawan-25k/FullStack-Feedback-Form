import React, { useState } from "react";
import axios from "axios";

export default function FeedbackForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/feedback", form);
            setStatus("✅ Feedback submitted successfully!");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            setStatus("❌ Failed to submit feedback.");
        }
    };

    const styles = {
        container: {
            padding: "30px",
            maxWidth: "400px",
            margin: "40px auto",
            background: "#f9f9f9",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        },
        heading: {
            textAlign: "center",
            marginBottom: "20px",
            color: "#333",
        },
        input: {
            width: "100%",
            padding: "10px",
            margin: "8px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
        },
        textarea: {
            width: "100%",
            padding: "10px",
            minHeight: "80px",
            margin: "8px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
            resize: "vertical",
        },
        button: {
            width: "100%",
            padding: "12px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "10px",
            transition: "background 0.2s",
        },
        buttonHover: {
            background: "#0056b3",
        },
        status: {
            textAlign: "center",
            marginTop: "15px",
            fontWeight: "bold",
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Feedback Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    style={styles.input}
                /><br />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={styles.input}
                /><br />
                <textarea
                    name="message"
                    placeholder="Your Feedback"
                    value={form.message}
                    onChange={handleChange}
                    required
                    style={styles.textarea}
                /><br />
                <button
                    type="submit"
                    style={styles.button}
                    onMouseOver={e => e.currentTarget.style.background = styles.buttonHover.background}
                    onMouseOut={e => e.currentTarget.style.background = styles.button.background}
                >
                    Submit
                </button>
            </form>
            <p style={styles.status}>{status}</p>
        </div>
    );
}
