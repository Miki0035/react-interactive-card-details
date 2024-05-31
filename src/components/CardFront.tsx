import { useContext } from "react";
import { CardHolderContext } from "../context/CardHolderProvider";
import cardFrontImage from "../assets/images/bg-card-front.png";
import "../styles/cardFront.css";
const CardFront = () => {
  const { formData } = useContext(CardHolderContext);
  
  const handleCardDisplay = () => {
    const rawText = [...formData.cardNumber.split(' ').join("")] //remove old spaces
    const creditCard: string [] = []  //create card as array
    rawText.forEach((letter, index) => {
      if (index % 4 === 0 && index !== 0) creditCard.push(" ")    //add space after 4 digits
        creditCard.push(letter);
    })
    return creditCard.join('')
  }
  return (
    <div className="card-front-image-container">
      <div className="card-front-image">
        <img src={cardFrontImage} alt="Card Front" />
        <div className="card-info-container">
          <p className="circle-container">
            <span className="big-circle"></span>{" "}
            <span className="small-circle"></span>
          </p>
          <p className="card-number">
            {formData.cardNumber ? handleCardDisplay() : "0000 0000 0000"}
          </p>
          <p className="card-user-date-container">
            <span>{formData.name ? formData.name : "jane appleseed"}</span>{" "}
            <span>
              {formData.month ? formData.month : "00"}/
              {formData.year ? formData.year : "00"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
