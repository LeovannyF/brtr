const express = require('express');
const app = express()
const path = require('path');
const port = process.env.PORT || 3000;

app.use('/dist', express.static(path.join(__dirname, './dist')))

app.listen(port, () => {
  console.log(`listening on port ${3000}`)
})

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})
