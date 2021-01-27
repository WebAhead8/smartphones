function autoComplete (req, res) {
  if (req.method === 'POST') {
      
    let body = ''

    req.on('data', chunk => {
      body += chunk.toString()
      
    })
    req.on('end', () => {
      console.log("body",body)
    })
  }
}

module.exports = autoComplete
