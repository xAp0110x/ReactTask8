// CustomButton.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import "../CustomButton.css";

const CustomButton = ({ text, warnMessage, hint }) => {
  const [isWarned, setIsWarned] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const handleWarnButtonClick = () => {
    setIsWarned(!isWarned);
    if (isWarned) {
      alert(warnMessage);
    }
  };

  const handleHintMouseOver = () => {
    setHintVisible(true);
  };

  const handleHintMouseOut = () => {
    setHintVisible(false);
  };

  return (
    <div className={`custom-button-container ${isWarned ? "warned" : ""}`}>
      <button
        className="custom-button normal-button"
        onClick={handleClick}
        onMouseOver={handleHintMouseOver}
        onMouseOut={handleHintMouseOut}
        title={hint}
      >
        {text}
      </button>
      {buttonClicked && !isWarned && <p className="click-message">Mesaj!</p>}
      <button
        className={`custom-button warn-button ${isWarned ? "active" : ""}`}
        onClick={handleWarnButtonClick}
      >
        Warning
      </button>
      {hintVisible && <p className="hint-message">Bu bir ipucudur.</p>}
    </div>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  warnMessage: PropTypes.string,
  hint: PropTypes.string,
};

export default CustomButton;
