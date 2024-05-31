import { useState } from "react";
import "./App.css";
import { CardBack, CardFront, CardForm, Success } from "./components";
import { CardHolderProvider } from "./context/CardHolderProvider";

const App = () => {
  const [success, setSuccess] = useState(false);

  return (
    <CardHolderProvider>
      <main>
        {" "}
        <div className="card-container">
          <CardBack />
          <CardFront />
        </div>
        <div className="form-container">
          {success ? (
            <Success setSucess={() => setSuccess(!success)} />
          ) : (
            <CardForm setSucess={() => setSuccess(!success)} />
          )}
          <div className="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="https://www.linkedin.com/in/mikiyas-kebede-b661aa225" target="_blank">Mikiyas Kebede</a>.
          </div>
        </div>
        {/* Completed state start  */}
      </main>
    </CardHolderProvider>
  );
};

export default App;
