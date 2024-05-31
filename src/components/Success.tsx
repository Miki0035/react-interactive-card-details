import React, { useContext } from "react";
import iconComplete from "../assets/images/icon-complete.svg";
import "../styles/sucess.css";
import { SucessProps } from "../types";
import { CardHolderContext } from "../context/CardHolderProvider";
const Success: React.FC<SucessProps> = ({ setSucess }) => {
  const { setFormData } = useContext(CardHolderContext);
  const defaultData = {
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  };
  const save = () => {
    setFormData(defaultData);
    setSucess();
  };
  return (
    <div className="success-container">
      <img src={iconComplete} alt="complete icon" />
      <h1>Thank you!</h1>
      <p>We've added your card details</p>
      <button
        onClick={() => {
          save();
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default Success;
