"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          submitting: false,
          success: true,
          message: "Message Sent Successfully!",
        });
        setFormData({
          fname: "",
          lname: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus({
          submitting: false,
          success: false,
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        message: "Failed to send message. Please check your connection.",
      });
    }
  };

  return (
    <div className="contact-us-form">
      {/* Section Title Start */}
      <div className="section-title">
        <h2 className="text-anime-style-2" data-cursor="-opaque">
          Send message <span>with us</span>
        </h2>
      </div>
      {/* Section Title End */}

      {/* Contact Form Start */}
      <div className="contact-form">
        <form onSubmit={handleSubmit} className="wow fadeInUp" data-wow-delay="0.2s">
          <div className="row">
            <div className="form-group col-md-6 mb-4" style={{ position: "relative" }}>
              <input
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                className="form-control"
                placeholder="First Name"
                required
              />
              <i className="fa-regular fa-user" style={{ position: "absolute", right: "20px", top: "18px", color: "var(--primary-color)" }}></i>
            </div>

            <div className="form-group col-md-6 mb-4" style={{ position: "relative" }}>
              <input
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                className="form-control"
                placeholder="Last Name"
                required
              />
              <i className="fa-regular fa-user" style={{ position: "absolute", right: "20px", top: "18px", color: "var(--primary-color)" }}></i>
            </div>

            <div className="form-group col-md-6 mb-4" style={{ position: "relative" }}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Email Address"
                required
              />
              <i className="fa-regular fa-envelope" style={{ position: "absolute", right: "20px", top: "18px", color: "var(--primary-color)" }}></i>
            </div>

            <div className="form-group col-md-6 mb-4" style={{ position: "relative" }}>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
                placeholder="Phone Number"
                required
              />
              <img
                src="/images/icon-phone-primary.svg"
                alt="Phone"
                style={{ position: "absolute", right: "20px", top: "18px", width: "16px" }}
              />
            </div>

            <div className="form-group col-md-12 mb-5">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                rows="4"
                placeholder="Message"
              ></textarea>
            </div>

            <div className="col-lg-12">
              <div className="contact-form-btn">
                <button type="submit" className="btn-default" disabled={status.submitting}>
                  {status.submitting ? "sending..." : "submit message"}
                </button>
                {status.message && (
                  <div
                    className={`h4 mt-3 ${
                      status.success ? "text-success" : "text-danger"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* Contact Form End */}
    </div>
  );
}
