const homeHandler = require('./handlers/home')
const publicHandler = require('./handlers/public')
const missingHandler = require("./handlers/missing");


function router (req, res) {

  if (req.url === '/') {
    homeHandler(req, res)
  } else if (req.url.includes('public')) {
    publicHandler(req, res)
  } else if (req.url === '/getsmartphone') {
      brandHandlers(req,res);
  } else {
    missingHandler(req, res);
  }
}

module.exports = router
