"use client";
import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

// CSS
import "./cursor.css";
import { getDetailedClientInfo } from "@/utils/Clientinfo.js";

const Cursor = () => {
  const [isDesktopDevice, setIsDesktopDevice] = useState(false);

  getDetailedClientInfo().then((info) => console.log(info));

  function isDesktop() {
    // Check screen size
    const isLargeScreen =
      window.innerWidth >= 1024 && window.innerHeight >= 768;

    // Check if touch is supported
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    // Check user agent for desktop keywords
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isDesktopUA =
      /win|mac|linux/i.test(userAgent) &&
      !/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent,
      );

    // Combine checks
    return isLargeScreen && !isTouchDevice && isDesktopUA;
  }

  // Usage in React component
  useEffect(() => {
    setIsDesktopDevice(isDesktop());
  }, []);

  return (
    <>
      {isDesktopDevice && (
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
      )}
    </>
  );
};

export default Cursor;
