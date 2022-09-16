import { useState } from "react";
import "./style.css";

function App() {
  const [tipPercent, setTipPercent] = useState(0);
  const [bill, setBill] = useState((0.0).toFixed(2));
  const [people, setPeople] = useState(0);
  let total;
  let tip;
  people > 0 && bill > 0
    ? (total = Math.round(((bill + bill * tipPercent) / people) * 100) / 100)
    : (total = (0.0).toFixed(2));
  tipPercent > 0 && bill > 0 && people > 0
    ? (tip = (Math.round((bill * tipPercent) / people) * 100) / 100)
    : (tip = (0.0).toFixed(2));
  // input events
  const handleBillChange = (e) => {
    let val = parseFloat(e.target.value);
    setBill(val);
  };
  const handlePeopleChange = (e) => {
    setPeople(parseFloat(e.target.value));
  };
  const handlePercentChange = (e) => {
    setTipPercent(parseFloat(e.target.value) * 0.01);
  };
  const resetForm = (e) => {
    e.preventDefault();
    setBill(0);
    setPeople(0);
    setTipPercent();
    for (let i = 0; i < 3; i++) {
      document.getElementsByTagName("input")[i].value = "";
    }
  };
  
  return (
    <>
      <body>
        <form className="container">
          <div className="input-container">
            <label htmlFor="bill">Bill</label>
            <span className="icon" id="dolla">
              <input
                type="number"
                className="input bill"
                placeholder="00.00"
                name="bill"
                onChange={handleBillChange}
                min="0"
                max="999999"
                required
              />
            </span>

            <label htmlFor="bill">Select Tip %</label>
            <div className="tip-container">
              <button
                className={`btn ${tipPercent === 0.05 ? "selected" : ""}`}
                onClick={() => setTipPercent(0.05)}
              >
                5%
              </button>

              <button
                className={`btn ${tipPercent === 0.1 ? "selected" : ""}`}
                onClick={() => setTipPercent(0.1)}
              >
                10%
              </button>
              <button
                className={`btn ${tipPercent === 0.15 ? "selected" : ""}`}
                onClick={() => setTipPercent(0.15)}
              >
                15%
              </button>
              <button
                className={`btn ${tipPercent === 0.2 ? "selected" : ""}`}
                onClick={() => setTipPercent(0.2)}
              >
                20%
              </button>
              <button
                className={`btn ${tipPercent === 0.25 ? "selected" : ""}`}
                onClick={() => setTipPercent(0.25)}
              >
                25%
              </button>

              <input
                type="number"
                className="custom btn"
                placeholder="Custom"
                onChange={handlePercentChange}
                min="0"
                max="999"
              />
            </div>
            <label htmlFor="num-of-ppl">Number of People</label>
            <span className="icon" id="person">
              <input
                type="number"
                className="input num-of-ppl"
                placeholder="0"
                onChange={handlePeopleChange}
                min="0"
                required
                max="999999"
              />
            </span>
          </div>

          <div className="result-container">
            <div className="result-item-container">
              <span class="result-item-lbl">Tip Amount</span>
              <span class="result-item">${tip ? tip : "0.00"}</span>
            </div>
            <div className="result-item-container">
              <span class="result-item-lbl">Total</span>
              <span class="result-item">${total ? total : "0.00"}</span>
            </div>
            <button
              className={`btn  ${
                bill && tipPercent && people ? "reset" : "inactive"
              }`}
              onClick={resetForm}
            >
              RESET
            </button>
          </div>
        </form>
      </body>
    </>
  );
}

export default App;
