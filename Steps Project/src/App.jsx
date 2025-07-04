import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [show, setShow] = useState(true);

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  function handleNext() {
    if (step < 3) {
      setStep((step) => step + 1);
      // setStep((step) => step + 1);
    }
    // stepVar + 1;
  }

  function handlePrev() {
    if (step > 1) {
      setStep((step) => step - 1);
      // setStep((step) => step - 1);
    }
    // stepVar + 1;
  }

  function toggle() {
    setShow((show) => !show);
  }

  return (
    <>
      <button onClick={toggle}>X</button>
      {show && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""} step-1`}>1</div>
            <div className={`${step >= 2 ? "active" : ""} step-2`}>2</div>
            <div className={`${step >= 3 ? "active" : ""} step-3`}>3</div>
          </div>

          <p className="message">{messages[step - 1]}</p>

          <div className="buttons">
            <button className="previous" onClick={handlePrev}>
              Previous
            </button>
            <button className="next" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
