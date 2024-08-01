import React from "react";
import AnimatedCursor from "react-animated-cursor";

// CSS
import "./cursor.css";

const Cursor = () => {
  return (
    <>
      <div aria-label="cursor" className="hidden lg:block">
        <AnimatedCursor
          innerSize={8}
          outerSize={40}
          innerScale={2}
          outerScale={2}
          outerAlpha={0}
          innerStyle={{
            backgroundColor: "var(--cursor-color)",
          }}
          outerStyle={{
            border: "1px solid var(--cursor-color)",
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      </div>
    </>
  );
};

export default Cursor;
