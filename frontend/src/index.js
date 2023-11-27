import ReactDOM from "react-dom/client";
import Main from "./Main";
import "./index.css";
import React from "react";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}vh`);

window.addEventListener("resize", () => {
  console.log("resize");
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}vh`);
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Main />
  </>
);
