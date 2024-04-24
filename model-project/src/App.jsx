import React, { useState } from "react";
import "./App.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [count, setCount] = useState(1);

  const openPopup = () => {
    setShowPopup(!showPopup); // Toggle the popup
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <>
      <h2>Model popup</h2>
      <button style={{ backgroundColor: "dodgerblue" }} onClick={openPopup}>
        Pop-up
      </button>
      <h2>Count </h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Up {count}</button>
      {count > 0 ? (
        <button onClick={() => setCount(count - 1)}>Down {count}</button>
      ) : (
        <button >done {count}</button>
      )}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <div className="popup-content">
              <h1>Hello {count}</h1>
              <button onClick={closePopup}>Close</button>
              <button onClick={closePopup}>Ok</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
