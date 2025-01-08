import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./components/star/StarRating";
import Test from "./components/star/Test";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Test /> */}
    <StarRating />

    <StarRating
      maxLength={5}
      size={30}
      color="red"
      defaultRating={2}
      message={["terrible", "bad", "okay", "good", "amazing"]}
    />
  </React.StrictMode>
);
