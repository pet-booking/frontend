'use strict'

const express = require('express')
let port = process.env.PORT || 3000

express()
  .use(require('morgan')('common'))
  .use(express.static(`${__dirname}/dist`))
  .get('*', (req, res) => res.sendFile(`${__dirname}/index.html`))
  .listen(port, () => {
    console.log('Server Up @', port)
  })
