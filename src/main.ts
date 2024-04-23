import { IMsgResponse, TranslateToEnum } from './types'
import { GigaChat } from './api/api'
import { LingoBot } from './model/bot'

const apiGigachat = new GigaChat()

LingoBot.on('polling_error', (error: Error) => {
  console.log(error)
})

LingoBot.on('message', async (msg: IMsgResponse) => {
  if(!msg.text) return
  const chatId = msg.chat.id

  if(typeof msg.text === 'string') {
    const langSegment = msg.text.split(' ')[0].split('@')[0].split('/')[1]
    const msgContent = msg.text.split(' ').slice(1).join(' ')

    if(msgContent === '') {
      LingoBot.sendMessage(chatId, 'Message cannot be empty )')
      return
    }

    // eslint-ignore-next-line
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { data } = await apiGigachat.getChatCompletions({
      ...msg,
      text: msgContent
    }, langSegment as TranslateToEnum)

    console.log(data)

    const message = `${data.choices[0].message.content} (${langSegment})`
    // Delete last message
    //   LingoBot.deleteMessage(chatId, lastMessageId)
    // And then replace with translation
    LingoBot.sendMessage(chatId, message)
  }
})
