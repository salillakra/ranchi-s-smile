import React from "react";
import AnimatedCursor from "react-animated-cursor";

// CSS
import "./cursor.css";
import { BrowserView } from "react-device-detect";

const Cursor = () => {
  return (
    <BrowserView>
      <div aria-label="cursor">
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
    </BrowserView>
  );
};

export default Cursor;
