const willServer = require('./server')

willServer.then(server => {
  server.listen(3000, err => {
    if(err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})