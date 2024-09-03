import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import avatar from "./assets/avatar.png";
import purple from "./assets/purple.png";
import dice_one from "./assets/dice_one.png";
import dice_two from "./assets/dice_two.png";
import dice_three from "./assets/dice_three.png";
import dice_four from "./assets/dice_four.png";
import dice_five from "./assets/dice_five.png";
import dice_six from "./assets/dice_six.png";
import "./index.scss";

const optionsWithDice = [
  { option: "You can call me Zaw.", dice: dice_one },
  { option: "A 26 years old Frontend Developer.", dice: dice_two },
  { option: "Been in the industry since 2019", dice: dice_three },
  { option: "Thanks for visiting my website!", dice: dice_four },
  { option: "I love cats and video games.", dice: dice_five },
  { option: "This website is not done yet.", dice: dice_six },
];

const Index = () => {
  const [factIndex, setFactIndex] = useState(0);

  const handleDiceClick = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * optionsWithDice.length);
    } while (newIndex === factIndex);
    setFactIndex(newIndex);
  };

  return (
    <div className="welcome-section">
      <img src={purple} alt="purple" className="purple" />
      <h1 className="cursor-scale">
        <TypeAnimation
          sequence={["Hi There, Welcome"]}
          wrapper="span"
          speed={150}
          cursor={false}
        />
      </h1>
      <div className="avatar-container">
        <img className="cursor-scale" src={avatar} alt="avatar" />
      </div>
      <div className="info-container">
        <h2 className="cursor-scale">
          My Name is <span className="neon-lime">Zaw Htet Aung</span>
        </h2>
        <div className="dice-options">
          <p>{optionsWithDice[factIndex].option}</p>
          <img
            src={optionsWithDice[factIndex].dice}
            onClick={handleDiceClick}
            alt="dice"
          />
        </div>
      </div>
      {/* <ul className="nav">
        <li>
          <Link to="/projects">Recent Projects</Link>
        </li>
      </ul> */}
    </div>
  );
};

export default Index;
