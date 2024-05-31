import { ReactNode, createContext, useState } from "react";
import { CardHolderContextProps, formData } from "../types";

//default value for the context
const defaultFormData = {
  formData: {
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  },
  setFormData: () => {},
};

const CardHolderContext =
  createContext<CardHolderContextProps>(defaultFormData);

const CardHolderProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<formData>({
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });
  return (
    <CardHolderContext.Provider value={{ formData, setFormData }}>
      {children}
    </CardHolderContext.Provider>
  );
};

export { CardHolderProvider, CardHolderContext};
