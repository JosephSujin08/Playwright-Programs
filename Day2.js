function getBrowser(browser) {
  if (browser.includes("Chrome")) {
    console.log("Chrome");
  } else if (browser.includes("Firefox")) {
    console.log("Firefox");
  } else if (browser.includes("Safari")) {
    console.log("Safari");
  } else {
    console.log("Unknown");
  }
}

getBrowser("Chrome");
getBrowser("Firefox");