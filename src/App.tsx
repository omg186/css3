import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoadingFirst from "./component/LoadingFirst/Index";

function App() {
  return (
    <div className="App">
      <header className="App-header h-20 text-center">
        <img src={logo} className="App-logo h-20 w-20 m-auto" alt="logo" />
      </header>
      <div className={"gap-20 p-20"}>
        <LoadingFirst></LoadingFirst>
      </div>
    </div>
  );
}

export default App;
