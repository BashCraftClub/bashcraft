import * as React from "react";

interface EmailTemplateProps {
  verificationLink: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  verificationLink,
}) => (
  <div
    style={{
      backgroundColor: "#000",
      color: "#fff",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    }}
  >
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <img
        src="https://res.cloudinary.com/dcwsgwsfw/image/upload/v1730633928/bash/bash_yag9qh.png"
        alt="BashCraft Club Logo"
        style={{ width: "693px", height: "102px" }}
      />
    </div>
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "#40C057" }}>Welcome to BashCraft,</h1>
      <p>
        We’re excited to have you join our community. To get started, please
        confirm your email address by clicking the button below.
      </p>
      <a
        href={verificationLink}
        style={{
          display: "inline-block",
          padding: "12px 24px",
          margin: "20px 0",
          backgroundColor: "#40C057",
          color: "#000",
          textDecoration: "none",
          fontWeight: "bold",
          borderRadius: "5px",
        }}
      >
        Verify Your Email
      </a>
      <p style={{ marginTop: "20px" }}>Welcome aboard, and happy crafting!</p>
      <p style={{ fontStyle: "italic", color: "#40C057" }}>— Team BashCraft</p>
    </div>
  </div>
);
