const https = require("https");

const keepAwake = () => {
  https.get("https://blogappbackend-dzi9.onrender.com/api/test", (res) => {
    console.log(`Request sent to keep the server awake: ${res.statusCode}`);
  });
};

// Send a request every 28 minutes
setInterval(keepAwake, 14 * 60 * 1000);
