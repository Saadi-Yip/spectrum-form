import React from "react";
import "./StepProgressBar.css";

const StepProgressBar = ({ totalSteps, currentStep }) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}>
        {Math.round(progress)}%
      </div>
    </div>
  );
};

export default StepProgressBar;
