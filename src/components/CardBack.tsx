import cardBackImg from "../assets/images/bg-card-back.png";
import "../styles/cardBack.css";
import { useContext } from "react";
import { CardHolderContext } from "../context/CardHolderProvider";

const CardBack = () => {
  const {formData} = useContext(CardHolderContext);
  return (
    <div className="card-back-image-container">
      <div className="card-back-image">
        <img src={cardBackImg} alt="Card Back" />
        <p>{formData.cvc ? formData.cvc : "000"}</p>
      </div>
    </div>
  );
};

export default CardBack;
