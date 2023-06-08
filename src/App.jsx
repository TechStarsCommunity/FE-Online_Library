import React from "react";
// import './App.css';
import Signup from "../src/pages/Signup";
import Login from "../src/pages/Login";
import Template from "./pages/Template";
function App() {
  return (
    <React.Fragment>
      <div>
        <Login />
      </div>
      <div>
        <Signup />

        <Template />
      </div>
    </React.Fragment>
  );
}

export default App;
