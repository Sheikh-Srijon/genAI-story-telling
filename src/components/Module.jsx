import React from "react";
import Question from "./Question";
import heroData from "../data/hero.json"; // Import hero.json using a relative path

const Module = ({ name }) => {
  let onClick = () => {
    alert("submit");
  };

  console.log(heroData);
  // Use map to create an array of Question components
  const renderQuestions = () => {
    return Object.keys(heroData).map((key) => {
      const questionData = heroData[key];
      return (
        <Question
          key={key}
          label={questionData.question}
          sublabel={questionData.subquestions.join("\n")}
        />
      );
    });
  };

  return (
    <div>
      {renderQuestions()}
      <button onClick={onClick}>Submit</button>
    </div>
  );
};

export default Module;
