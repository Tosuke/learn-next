const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

module.exports = app.prepare().then(() => {
  const server = express()

  server.get('/p/:id', (req, res) => {
    app.render(req, res, '/post', { id: req.params.id })
  })

  server.get('*', handle)
  return server
}).catch(ex => {
  console.error(ex.stack)
  process.exit(1)
})
