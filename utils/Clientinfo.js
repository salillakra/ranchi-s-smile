"use client";

export async function getDetailedClientInfo() {
  const info = {
    os: "Unknown",
    osVersion: "Unknown",
    device: "Unknown",
    browser: "Unknown",
    browserVersion: "Unknown",
    ram: "Unknown",
    cpu: "Unknown",
    cores: "Unknown",
    gpu: "Unknown",
    screenResolution: "Unknown",
    colorDepth: "Unknown",
    touchSupport: "Unknown",
    language: "Unknown",
    timezone: "Unknown",
    cookiesEnabled: "Unknown",
    doNotTrack: "Unknown",
    networkType: "Unknown",
    batteryLevel: "Unknown",
    ipAddress: "Unknown",
    userAgent: navigator.userAgent,
    ipInfo: {
      ip: "Unknown",
      country: "Unknown",
      countryCode: "Unknown",
      region: "Unknown",
      regionCode: "Unknown",
      city: "Unknown",
      postalCode: "Unknown",
      latitude: "Unknown",
      longitude: "Unknown",
      timezone: "Unknown",
      utcOffset: "Unknown",
      isp: "Unknown",
      org: "Unknown",
      as: "Unknown",
      asname: "Unknown",
    },
  };

  // Detect OS, Device, and Browser
  const ua = navigator.userAgent;
  let match;

  // OS detection
  if ((match = /Windows NT (\d+\.\d+)/.exec(ua))) {
    info.os = "Windows";
    info.osVersion = match[1];
  } else if ((match = /Mac OS X (\d+[._]\d+)/.exec(ua))) {
    info.os = "MacOS";
    info.osVersion = match[1].replace("_", ".");
  } else if (/Linux/.test(ua)) {
    info.os = "Linux";
  } else if (/Android/.test(ua)) {
    info.os = "Android";
  } else if (/iOS/.test(ua)) {
    info.os = "iOS";
  }

  // Device detection
  if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua,
    )
  ) {
    info.device = "Mobile";
  } else {
    info.device = "Desktop";
  }

  // Browser detection
  if ((match = /Firefox\/(\d+)/.exec(ua))) {
    info.browser = "Firefox";
    info.browserVersion = match[1];
  } else if ((match = /Chrome\/(\d+)/.exec(ua))) {
    info.browser = "Chrome";
    info.browserVersion = match[1];
  } else if ((match = /Safari\/(\d+)/.exec(ua))) {
    info.browser = "Safari";
    info.browserVersion = match[1];
  } else if ((match = /MSIE (\d+)|Trident.*rv:(\d+)/.exec(ua))) {
    info.browser = "Internet Explorer";
    info.browserVersion = match[1] || match[2];
  } else if ((match = /Edge\/(\d+)/.exec(ua))) {
    info.browser = "Edge";
    info.browserVersion = match[1];
  }

  // RAM
  if (navigator.deviceMemory) {
    info.ram = `${navigator.deviceMemory} GB`;
  }

  // CPU and cores
  info.cores = navigator.hardwareConcurrency || "Unknown";

  // Screen info
  info.screenResolution = `${screen.width}x${screen.height}`;
  info.colorDepth = `${screen.colorDepth}-bit`;

  // Touch support
  info.touchSupport = "ontouchstart" in window ? "Yes" : "No";

  // Language and timezone
  info.language = navigator.language || navigator.userLanguage;
  info.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Cookies and Do Not Track
  info.cookiesEnabled = navigator.cookieEnabled ? "Yes" : "No";
  info.doNotTrack = navigator.doNotTrack || "Unspecified";

  // Network type (if available)
  if (navigator.connection) {
    info.networkType = navigator.connection.effectiveType || "Unknown";
  }

  // Battery level (if available)
  if (navigator.getBattery) {
    try {
      const battery = await navigator.getBattery();
      info.batteryLevel = `${Math.round(battery.level * 100)}%`;
    } catch (e) {
      info.batteryLevel = "Not available";
    }
  }

  // GPU info (limited)
  const canvas = document.createElement("canvas");
  const gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (gl) {
    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    info.gpu = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
  }

  // IP Address (requires server-side support)
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    info.ipAddress = data.ip;
  } catch (error) {
    info.ipAddress = "Failed to retrieve";
  }

  // Fetch detailed IP information
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();

    info.ipInfo = {
      ip: data.ip,
      country: data.country_name,
      countryCode: data.country_code,
      region: data.region,
      regionCode: data.region_code,
      city: data.city,
      postalCode: data.postal,
      latitude: data.latitude,
      longitude: data.longitude,
      timezone: data.timezone,
      utcOffset: data.utc_offset,
      isp: data.org,
      org: data.org,
      as: data.asn,
      asname: data.asn,
    };
  } catch (error) {
    console.error("Failed to retrieve IP information:", error);
  }

  return info;
}
