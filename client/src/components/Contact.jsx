import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (result.success) {
      alert("Message sent!");
      form.reset();
    } else {
      alert("Failed to send message. Try again later.");
    }
  };

  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2 className="section-title">📫 Let's Connect</h2>
      <p className="contact-intro">
        Have a question or want to work together? I'd love to hear from you!
      </p>
      <form onSubmit={handleSubmit} method="POST" className="contact-form">
        <div className="form-group">
          <FaUser className="form-icon" />
          <input type="text" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <FaEnvelope className="form-icon" />
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <FaCommentDots className="form-icon" />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="send-btn">
          <FaPaperPlane style={{ marginRight: "8px" }} /> Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
