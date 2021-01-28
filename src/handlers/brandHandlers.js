// read from data.json
const getAllBrands = require("./brandFilter");

// url.searchparams aftr fetch, use on server also
//deployment
// data  filter
// startswith
// brand filter function
// remove duplicates

function brandHandlers(req, res) {
  const brandsReturn = getAllBrands();
  if (brandsReturn.error) {
    res.writeHead(500, { "content-type": "text/html" });
    res.end("<h1>server error</h1>");
  } else {
    res.writeHead(200, { "content-type": "apllication/json" });
    res.end(JSON.stringify(getAllBrands()));
  }
}

module.exports = brandHandlers;
