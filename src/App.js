import React from "react";
import "./index.scss";

function App() {
  const [view, setView] = React.useState(false);

  function onView() {
    setView(true);
  }

  function onNotView() {
    setView(false);
  }

  return (
    <div className="App">
      <button onClick={onView} className="open-modal-btn">
        ✨ Открыть окно
      </button>
      {/* {view && (<div>...</div>)}  */}
      <div className={`overlay animated ${view ? "show" : ""}`}>
        <div className="modal">
          <img
            onClick={onNotView}
            src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
