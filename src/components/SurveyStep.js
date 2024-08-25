import React from "react";
import "./SurveyStep.css";

const SurveyStep = ({
  question,
  handleNext,
  handleBack,
  handleInputChange,
  formData,
  errors,
  currentStep,
}) => {
  const renderQuestion = () => {
    if (question.type === "radio") {
      return (
        <div className="options-container">
          {question.options.map((option) => (
            <div
              key={option}
              className={`option ${
                formData[question.name] === option ? "selected" : ""
              }`}
              onClick={() => handleInputChange(question.name, option)}
            >
              <label>
                <input
                  type="radio"
                  name={question.name}
                  value={option}
                  checked={formData[question.name] === option}
                  onChange={(e) =>
                    handleInputChange(question.name, e.target.value)
                  }
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      );
    } else if (question.type === "text" || question.type === "email") {
      return (
        <div>
          <input
            type={question.type}
            name={question.name}
            value={formData[question.name]}
            onChange={(e) => handleInputChange(question.name, e.target.value)}
            className="text-input"
            placeholder={question.placeholder || ""}
          />
          {errors[question.name] && <div className="error">{errors[question.name]}</div>}
        </div>
      );
    } else if (question.type === "contact") {
      return (
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className="text-input"
          />
          {errors.firstName && <div className="error">{errors.firstName}</div>}

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className="text-input"
          />
          {errors.lastName && <div className="error">{errors.lastName}</div>}

          <input
            type="text"
            name="phone"
            placeholder="Phone Number (e.g., (123) 456-7890)"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="text-input"
          />
          {errors.phone && <div className="error">{errors.phone}</div>}

          <select
            name="callBackTime"
            value={formData.callBackTime}
            onChange={(e) => handleInputChange("callBackTime", e.target.value)}
            className="text-input"
          >
            {question.callBackTimeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.callBackTime && <div className="error">{errors.callBackTime}</div>}
        </div>
      );
    }
    // Additional input types...
  };

  return (
    <div className="survey-step">
      {currentStep > 0 && (
        <button className="back-button" onClick={handleBack}>
          ← Back
        </button>
      )}
      <h2>{question.question}</h2>
      {renderQuestion()}
      <div className="navigation-buttons">
        <button onClick={handleNext} className="next-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default SurveyStep;
