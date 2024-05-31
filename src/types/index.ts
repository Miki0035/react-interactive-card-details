import { Dispatch, SetStateAction } from "react";

export type CardFormProps = {
  setSucess: () => void;
};

export type SucessProps = {
  setSucess: () => void;
};

export type errors = {
  name?: string;
  cardNumber?: string;
  month?: string;
  year?: string;
  cvc?: string;
};

export type formData = {
  name: string;
  cardNumber: string;
  month: string;
  year: string;
  cvc: string;
};

export type CardHolderContextProps = {
  formData: formData,
  setFormData: Dispatch<SetStateAction<formData>>
}
