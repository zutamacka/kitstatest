/*
  dependencies
*/
const express = require('express')

/*
  config - express
*/

const app = express()
const port = 3000

/*
  endpoint - posts
*/
app.get('/posts', (request, response) => {
  let posts = [
    {
      caption: 'kitty bridge',
      location: 'LA, US',
    },
    {
      caption: 'kitty scraper',
      location: 'MC, HAmmer',
    },
  ]

  response.send(posts)
})

/*
  listen
*/
app.listen(port, () => {
  console.log(`${port}`)
})
