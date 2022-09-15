import { useState } from "react";
import "./style.css";

function App() {
  const [tipPercent, setTipPercent] = useState(0);
  const [bill, setBill] = useState((0.0).toFixed(2));
  const [people, setPeople] = useState(0);
  let total;
  let tip;
  people > 0 && bill > 0
    ? ((total = (bill + bill * tipPercent) / people)).toFixed(2)
    : (total = 0.00.toFixed(2));
    tipPercent>0 && bill > 0 &&people > 0
    ? tip=((bill*tipPercent) / people).toFixed(2)
    : (tip = 0.00.toFixed(2));
  // input events
  const handleBillChange = (e) => {
    let val = parseFloat(e.target.value);
    setBill(val);
  };
  const handlePeopleChange = (e) => {
    setPeople(parseFloat(e.target.value));
  };
  return (
    <>
      <body>
        <main className="container">
          <div className="input-container">
            <label htmlFor="bill">Bill</label>
            <span className="icon" id="dolla">
              <input
                type="number"
                className="input bill"
                placeholder="00.00"
                name="bill"
                onChange={handleBillChange}
              />
            </span>

            <label htmlFor="bill">Select Tip %</label>
            <div className="tip-container">
              <button className="btn" onClick={()=>setTipPercent(.05)}>5%</button>

              <button className="btn" onClick={()=>setTipPercent(.1)}>10%</button>
              <button className="btn" onClick={()=>setTipPercent(.15)}>15%</button>
              <button className="btn" onClick={()=>setTipPercent(.2)}>20%</button>
              <button className="btn" onClick={()=>setTipPercent(.25)}>25%</button>

              <input
                type="number"
                className="custom btn"
                placeholder="Custom"
              />
            </div>
            <label htmlFor="num-of-ppl">Number of People</label>
            <span className="icon" id="person">
              <input
                type="number"
                className="input num-of-ppl"
                placeholder="0"
                onChange={handlePeopleChange}
              />
            </span>
          </div>

          <div className="result-container">
            <div className="result-item-container">
              <span class="result-item-lbl">Tip Amount</span>
              <span class="result-item">${tip}</span>
            </div>
            <div className="result-item-container">
              <span class="result-item-lbl">Total</span>
              <span class="result-item">${total}</span>
            </div>
            <button className="btn reset">RESET</button>
          </div>
        </main>
      </body>
    </>
  );
}

export default App;
