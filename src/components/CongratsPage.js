import React from "react";
import "./CongratsPage.css";

const CongratsPage = ({ formData }) => {
  return (
    <div className="congrats-page">
      <h2 className="congrats-title">Congratulations! Your request has been sent.</h2>
      <p className="congrats-message">
        <strong>Call Now to secure your offer today!</strong> Speak to one of our experts to compare internet plans and offers and choose your provider.
      </p>
      <p className="congrats-submessage">
        <strong>Skip the wait, call now!</strong>
      </p>
      <button className="call-now-button">
        <i className="fa fa-phone" aria-hidden="true"></i> Call 1-830-376-0449
      </button>
      <div className="summary">
        <div className="summary-item">
          <span className="summary-label">Internet Speed:</span>
          <span className="summary-value">{formData.speed || 'Help me decide'}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Internet Usage:</span>
          <span className="summary-value">{formData.usage || 'All/Other'}</span>
        </div>
      </div>
    </div>
  );
};

export default CongratsPage;
