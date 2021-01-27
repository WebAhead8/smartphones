function autoComplete(req, res) {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    console.log("body", JSON.parse(body).word);
  });
}

module.exports = autoComplete;
