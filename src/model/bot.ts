// eslint-disable-next-line @typescript-eslint/no-var-requires
const TelegramBot = require('node-telegram-bot-api')

import { config } from 'dotenv'
config()

const bot_token = process.env.TELEGRAM_BOT_KEY || ''

if (!bot_token) {
  new Error('Error: Telegram bot key no found')
} else {
  console.log('Bot has successfully running!')
}

export const LingoBot = new TelegramBot(bot_token, {
  polling: true,
  interval: 300
})
