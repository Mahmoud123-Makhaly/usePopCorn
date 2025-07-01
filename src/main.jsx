import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import "./index2.css";
import App from "./App.jsx";
import StarRating from "./components/star/StarRating.jsx";
import Test from "./components/star/Test.jsx";
import TextExpander from "./components/text-expander/TextExpander.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <StarRating maxRating={10} />
    <StarRating
      maxRating={5}
      color="red"
      size={24}
      className="test"
      messages={["poor", "bad", "ok", "good", "great"]}
      defaultRating={3}
    />
    <Test /> */}
    <TextExpander
      isOpen={false}
      color="blue"
      collapseText="Show  less"
      expandText=" Show   more "
      collapsedNumber={20}
    >
      Space travel is the ultimate adventure! Imagine soaring past the stars and
      exploring new worlds. It's the stuff of dreams and science fiction, but
      believe it or not, space travel is a real thing. Humans and robots are
      constantly venturing out into the cosmos to uncover its secrets and push
      the boundaries of what's possible.
    </TextExpander>
    <TextExpander
      isOpen={true}
      color="orange"
      collapseText="collapse text"
      expandText="  expand text "
      collapsedNumber={30}
    >
      Space travel requires some seriously amazing technology and collaboration
      between countries, private companies, and international space
      organizations. And while it's not always easy (or cheap), the results are
      out of this world. Think about the first time humans stepped foot on the
      moon or when rovers were sent to roam around on Mars
    </TextExpander>
  </StrictMode>
);
