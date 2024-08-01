"use client";

export function DetectDevice() {
  let isMobile = window.matchMedia;
  if (isMobile) {
    let match_mobile = isMobile("(pointer:coarse)");
    return match_mobile.matches;
  }
  return false;
}

// DetectDevice();
