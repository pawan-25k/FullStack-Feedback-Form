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
 
    return (
        <div style={{ padding: "20px" }}>
            <h2>Feedback Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                /><br /><br />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                /><br /><br />
                <textarea
                    name="message"
                    placeholder="Your Feedback"
                    value={form.message}
                    onChange={handleChange}
                    required
                /><br /><br />
                <button type="submit">Submit</button>
            </form>
            <p>{status}</p>
        </div>
    );
}
