import React, { FormEvent, useState, useContext, ChangeEvent } from "react";
import "../styles/cardForm.css";
import { CardFormProps, errors, formData } from "../types";
import { CardHolderContext } from "../context/CardHolderProvider";

const CardForm: React.FC<CardFormProps> = ({ setSucess }) => {
  const { setFormData } = useContext(CardHolderContext);
  const [localFormData, setlocalFormData] = useState<formData>({
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  const [errors, setErrors] = useState<errors>({});

  //handles input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "cardNumber") {
      const rawValue = value.replace(/\s+/g, "");
      setlocalFormData((prevFormData) => ({
        ...prevFormData,
        [name]: rawValue,
      }));
    } else {
      setlocalFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  //will display card number as 4 digit numbers
  const handleCardDisplay = () => {
    const rawText = [...localFormData.cardNumber.split(" ").join("")]; //remove old spaces

    const creditCard: string[] = []; //create card as array

    rawText.forEach((letter, index) => {
      if (index % 4 === 0 && index !== 0) creditCard.push(" "); //add space after 4 digits
      creditCard.push(letter);
    });

    return creditCard.join("");
  };

  //handles form submission
  const handleForm = (event: FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      setFormData(localFormData);
      setSucess();
    }
  };

  //handles form validation
  const validateForm = () => {
    let tempErrors = {
      name: "",
      cardNumber: "",
      month: "",
      year: "",
      cvc: "",
    };
    if (localFormData.name === "") {
      tempErrors.name = "name is required";
    }
    if (localFormData.cardNumber === "") {
      tempErrors.cardNumber = "card number is required";
    } else if (
      isNaN(Number(localFormData.cardNumber)) ||
      localFormData.cardNumber.length !== 16
    ) {
      tempErrors.cardNumber = "wrong format, numbers only";
    }
    if (localFormData.month === "") {
      tempErrors.month = "can't be blank";
    }
    if (localFormData.year === "") {
      tempErrors.year = "can't be blank";
    }
    if (localFormData.cvc === "") {
      tempErrors.cvc = "can't be blank";
    }

    setErrors(tempErrors);

    if (
      tempErrors.name ||
      tempErrors.cardNumber ||
      tempErrors.month ||
      tempErrors.year ||
      tempErrors.cvc
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <form onSubmit={handleForm}>
      <div className="form-group">
        <label htmlFor="name">cardholder name</label>
        <input
          type="text"
          name="name"
          style={
            errors.name
              ? { borderColor: "hsl(0, 100%, 66%)" }
              : { borderColor: "hsl(278, 68%, 11%)" }
          }
          value={localFormData.name}
          id="name"
          placeholder="e.g. Jane Appleseed"
          onChange={handleChange}
        />
        {errors.name && <span className="errors">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="cardNumber">card number</label>
        <input
          style={
            errors.cardNumber
              ? { borderColor: "hsl(0, 100%, 66%)" }
              : { borderColor: "hsl(278, 68%, 11%)" }
          }
          type="text"
          value={handleCardDisplay()}
          name="cardNumber"
          id="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={handleChange}
        />
        {errors.cardNumber && (
          <span className="errors">{errors.cardNumber}</span>
        )}
      </div>
      <div className="form-group">
        <div className="date-label-group">
          <label htmlFor="month">exp. date(mm/yy)</label>
          <label htmlFor="cvc">cvc</label>
        </div>
        <div className="date-group">
          <div className="date-form-group">
            <input
              type="text"
              name="month"
              style={
                errors.month
                  ? { borderColor: "hsl(0, 100%, 66%)" }
                  : { borderColor: "hsl(278, 68%, 11%)" }
              }
              value={localFormData.month}
              id="month"
              placeholder="MM"
              onChange={handleChange}
            />
            {errors.month && <div className="errors">{errors.month}</div>}
          </div>
          <div className="date-form-group">
            <input
              type="text"
              style={
                errors.year
                  ? { borderColor: "hsl(0, 100%, 66%)" }
                  : { borderColor: "hsl(278, 68%, 11%)" }
              }
              value={localFormData.year}
              name="year"
              id="year"
              placeholder="YY"
              onChange={handleChange}
            />
            {errors.year && <div className="errors">{errors.year}</div>}
          </div>
          <div className="date-form-group">
            <input
              type="text"
              name="cvc"
              id="cvc"
              style={
                errors.cvc
                  ? { borderColor: "hsl(0, 100%, 66%)" }
                  : { borderColor: "hsl(278, 68%, 11%)" }
              }
              value={localFormData.cvc}
              placeholder="e.g. 123"
              onChange={handleChange}
            />
            {errors.cvc && <div className="errors">{errors.cvc}</div>}
          </div>
        </div>
      </div>
      <div className="button-container">
        <button type="submit">confirm</button>
      </div>
    </form>
  );
};

export default CardForm;
