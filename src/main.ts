// import express from 'express'
import { IMsgResponse } from './types'

import { LingoBot } from './model/bot'

LingoBot.on('polling_error', (error: Error) => {
  console.log(error)
})

LingoBot.on('text', async (msg: IMsgResponse) => {
  console.log(msg.from.language_code)
})

// const app = express()
// const port = 3000

// app.use(express.json())

// app.post('/bot', (req, res) => {
//   LingoBot.processUpdate(req.body)
//   res.sendStatus(200)
// })

// // Start Express Server
// app.listen(port, () => {
//   console.log(`Express server with bot is listening on ${port}`)
// })
