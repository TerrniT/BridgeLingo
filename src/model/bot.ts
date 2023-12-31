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
  polling: true
})

// function sendMessage(msg, text) {
// }
// 	bot.sendMessage(msg.chat.id, text)

// function getRandomWorkText() {
//     const workImitationArray = [
//         'Перевожу...',
//         'Абажжи, ща всё будет...',
//         'Ждите, ваш перевод обрабатывается...',
//         'Опять переводить...',
//         'Рад служить, кожаный мешок, твой перевод в пути...'
//     ]

//     const randomElement = Math.floor(Math.random() * workImitationArray.length)

//     return workImitationArray[randomElement]
// }

// async function getTranslation(msg) {
//     try {
//         sendMessage(msg, getRandomWorkText())
//         const completion = await openai.createChatCompletion({
//             model: 'gpt-3.5-turbo',
//             temperature: 0.2,
//             messages: [
//                 {
//                     role: 'user',
//                     content: `Необходимо перевести несколько фраз с вьетнамского на русский язык. Они могут быть написаны как на вьетнамском языке, так и латиницей, используя схожие символы. Я прошу тебя не добавлять лишнюю информацию или примеры употребления. Мне нужен только перевод. Переведи: ${msg.text}`
//                 }
//             ]
//         })
//         sendMessage(
//             msg,
//             `[ПЕРЕВОД]: ${completion.data.choices[0].message.content}`
//         )
//     } catch (error) {
//         if (error.response) {
//             sendMessage(
//                 msg,
//                 `Что-то пошло не так. Вот что именно: ${error.response.data}`
//             )
//         } else {
//             sendMessage(
//                 msg,
//                 `Что-то сильно сломалось. Вот что именно: ${error.message}. Перешли это сообщение создателю этого бота: t.me/ivan_tolstov`
//             )
//         }
//     }
// }

// bot.on('text', async (msg) => {
//     const name = msg.from.first_name ?? 'Бледнолицый заграничник'

//     if (msg.text.includes('/get_info')) {
//         bot.sendMessage(
//             msg.chat.id,
//             `Привет ${name}!
//       Я дружелюбный робот, который поможет тебе, мой друг, прочитать все, что присылают тебе в смс или где угодно вьетнамские сервисы или люди, на твоем любимом русском языке.

//       > Просто пришли мне текст на вьетнамском языке, неважно написан он траслитерацией или чем-то еще, может даже с ошибками. Наш ИИ тебе поможет.

//       > Пока я умею переводить только с вьетнамского на русский.
//       Но может быть смогу эволюционировать.

//       > В планах интегрировать чтение с любой картинки или фотографии, когда получим доступ к API ChatGPT 4`
//         )
//         return
//     } else {
//         await getTranslation(msg)
//     }
// })
