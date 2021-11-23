import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoadingFirst from "./component/LoadingFirst/Index";

function App() {
  return (
    <div className="App">
      <header className="App-header h-20 text-center">
        {/* <img src={logo} className="App-logo h-20 w-20 m-auto" alt="logo" /> */}
        <div className=" py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <img src={logo} className="h-full w-full m-auto" alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={"gap-20 p-20"}>
        <LoadingFirst></LoadingFirst>
      </div>
    </div>
  );
}

export default App;
