import "./style.css";
function App() {
  return (
    <>
      <body>
        <main className="container">
          <label htmlFor="bill">Bill</label>
          <span className="icon" id="dolla">
            <input
              type="number"
              className="input bill"
              placeholder="00.00"
              name="bill"
            />
          </span>

          <label htmlFor="bill">Select Tip %</label>
          <div className="tip-container">
            <button type="radio" className="btn">
              5%
            </button>
            <button type="radio" className="btn">
              10%
            </button>
            <button type="radio" className="btn">
              15%
            </button>
            <button type="radio" className="btn">
              20%
            </button>
            <button type="radio" className="btn">
              25%
            </button>
            <button type="radio" className="btn">
              50%
            </button>
            
            <input type="number" className="custom btn" placeholder="Custom" />
          </div>
          <label htmlFor="num-of-ppl">Number of People</label>
          <span className="icon" id="person">
          <input type="number" className="input num-of-ppl" placeholder="0" />              
            </span>
          <div className="result-container">
            <div className="tip-amt-per-person">
              <span>Tip Amount / person </span>
              <span>4.27</span>
            </div>
            <div className="total">
              <span>Total / person </span>
              <span>4.27</span>
            </div>
            <button className="btn reset">Reset</button>
          </div>
        </main>
      </body>
    </>
  );
}

export default App;
