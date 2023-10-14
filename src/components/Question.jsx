import React from "react";

const Question = ({ key, label, sublabel }) => {
  return (
    <div key={key} style={styles.questionStyles}>
      <label style={styles.title}>{label}</label>
      {sublabel && <p>{sublabel}</p>}
      <input type="text" style={styles.inputStyles} />
    </div>
  );
};

let styles = {
  questionStyles: {
    border: "1px solid #ccc",
    padding: "2rem",
  },
  title: {
    fontSize: "1.5rem",
    padding: "5px",
  },
  inputStyles: {
    width: "100%", // Make the input take up the whole width
    padding: "5px", // Add padding to the input if needed
  },
};

export default Question;
