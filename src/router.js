const homeHandler = require("./handlers/home");
const publicHandler = require("./handlers/public");
const missingHandler = require("./handlers/missing");
const brandHandlers = require("./handlers/brandHandlers");
const autoComplete = require("./handlers/autoCompleteHandler");
function router(req, res) {
  if (req.url === "/") {
    homeHandler(req, res);
  } else if (req.url.includes("public")) {
    publicHandler(req, res);
  } else if (req.url === "/getsmartphone") {
    brandHandlers(req, res);
  } else if (req.url === "/autocomplete") {
    autoComplete(req, res);
  } else {
    missingHandler(req, res);
  }
}

module.exports = router;
