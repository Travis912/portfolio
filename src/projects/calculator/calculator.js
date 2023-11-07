import "./calculator.css";
import { useState } from "react";

export default function Calculator() {
  const [valueOne, setValueOne] = useState(0);
  const [valueTwo, setValueTwo] = useState(0);
  const [sign, setSign] = useState("");

  const handleCalculator = (event) => {
    const number = event.target.value;
    if (valueOne === 0) {
      setValueOne(number);
    } else {
      setValueOne(valueOne + number);
    }
  };

  const handlePlus = () => {
    setValueTwo(valueOne);
    setValueOne(0);
    setSign("plus");
  };

  const handleMinus = () => {
    setValueTwo(valueOne);
    setValueOne(0);
    setSign("minus");
  };

  const handleMultiply = () => {
    setValueTwo(valueOne);
    setValueOne(0);
    setSign("multiply");
  };

  const handleDivide = () => {
    setValueTwo(valueOne);
    setValueOne(0);
    setSign("divide");
  };

  const handlePercent = () => {
    setValueOne(valueOne / 100);
  };

  const handleEquals = () => {
    if (sign === "plus") {
      setValueOne(
        Math.round((parseFloat(valueTwo) + parseFloat(valueOne)) * 100) / 100
      );
    } else if (sign === "minus") {
      setValueOne(
        Math.round((parseFloat(valueTwo) - parseFloat(valueOne)) * 100) / 100
      );
    } else if (sign === "divide") {
      setValueOne(
        Math.round((parseFloat(valueTwo) / parseFloat(valueOne)) * 100) / 100
      );
    } else if (sign === "multiply") {
      setValueOne(
        Math.round(parseFloat(valueTwo) * parseFloat(valueOne) * 100) / 100
      );
    }
  };

  return (
    <>
      <div>
        <div class="calculatorText">{valueOne}</div>
        <div id="calculatorButtonContainer">
          <button
            class="calculatorButtons"
            id="clear"
            onClick={() => setValueOne(0) && setValueTwo(0) && setSign("")}
          >
            C
          </button>
          <button
            class="calculatorButtons"
            id="negative"
            value="-"
            onClick={handleCalculator}
          >
            +/-
          </button>
          <button
            class="calculatorButtons"
            id="percent"
            value="/100"
            onClick={handlePercent}
          >
            %
          </button>
          <button
            class="calculatorButtons"
            value="1"
            onClick={handleCalculator}
          >
            1
          </button>
          <button
            class="calculatorButtons"
            value="2"
            onClick={handleCalculator}
          >
            2
          </button>
          <button
            class="calculatorButtons"
            value="3"
            onClick={handleCalculator}
          >
            3
          </button>
          <button
            class="calculatorButtons"
            value="4"
            onClick={handleCalculator}
          >
            4
          </button>
          <button
            class="calculatorButtons"
            value="5"
            onClick={handleCalculator}
          >
            5
          </button>
          <button
            class="calculatorButtons"
            value="6"
            onClick={handleCalculator}
          >
            6
          </button>
          <button
            class="calculatorButtons"
            value="7"
            onClick={handleCalculator}
          >
            7
          </button>
          <button
            class="calculatorButtons"
            value="8"
            onClick={handleCalculator}
          >
            8
          </button>
          <button
            class="calculatorButtons"
            value="9"
            onClick={handleCalculator}
          >
            9
          </button>
          <button
            class="calculatorButtons"
            id="zero"
            value="0"
            onClick={handleCalculator}
          >
            0
          </button>
          <button
            class="calculatorButtons"
            id="period"
            value="."
            onClick={handleCalculator}
          >
            .
          </button>
        </div>
        <div id="signsContainer">
          <button class="calculatorButtons" id="divide" onClick={handleDivide}>
            /
          </button>
          <button
            class="calculatorButtons"
            id="multiply"
            onClick={handleMultiply}
          >
            x
          </button>
          <button class="calculatorButtons" id="minus" onClick={handleMinus}>
            -
          </button>
          <button
            class="calculatorButtons"
            id="plus"
            value="plus"
            onClick={handlePlus}
          >
            +
          </button>
          <button
            class="calculatorButtons"
            id="equals"
            value="="
            onClick={handleEquals}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}
