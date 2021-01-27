const getAllBrands = require('./brandFilter')

function autoComplete (req, res) {
  if (req.method === 'POST') {
    let body = ''

    req.on('data', chunk => {
      body += chunk.toString()
    })
    req.on('end', () => {
      const parsedBody = JSON.parse(body)
      const result = getAllBrands(parsedBody.word, parsedBody.model)
      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify(result))
    })
  }
}

module.exports = autoComplete
