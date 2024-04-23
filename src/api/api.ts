import https from 'https'
import axios from 'axios'
import { config } from 'dotenv'
import { IMsgResponse, TranslateToEnum } from 'src/types'
import { propmtCollection } from '../model/propmt'

config()

const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  }),
  validateStatus: (status: number) => status >= 200 && status < 300
})

const secret = process.env.AI_CLIENT_SECRET || ''
const urlOauth = process.env.AI_URL_OAUTH || ''

interface IGetAccessTokenResponse {
  access_token: string
  expires_at: number | string
}

export class GigaChat {
  token: string | null
  expires: Date | null

  constructor() {
    this.token = null
    this.expires = null
  }

  getAccessToken = async () => {
    if (this.token && this.expires && new Date() < this.expires) {
      return this.token
    }

    if (!secret) return new Error('Error: secret is not provided')

    try {
      const { data } = await instance.post<IGetAccessTokenResponse>(
        urlOauth,
        new URLSearchParams({
          scope: 'GIGACHAT_API_PERS'
        }),
        {
          headers: {
            Authorization: 'Bearer ' + secret,
            RqUID: '6f0b1291-c7f3-43c6-bb2e-9f3efb2dc98e',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      )

      if (!data) {
        throw new Error('Error accessing token')
      }

      this.token = data.access_token
      this.expires = new Date(data.expires_at)
    } catch (error) {
      console.log(error)
    }

    return this.token
  }

  getChatCompletions = async (messageObject: IMsgResponse, translateTo: TranslateToEnum) => {
    if(!messageObject) {
      throw new Error('Error: messageObject is not provided')
    }
    if(!translateTo) {
      throw new Error('Error: not specified pair of languges for translation')
    }
    if (!this.token) {
      try {
        const newToken = await this.getAccessToken()
        if (newToken) {
          this.token = newToken as string
        }
      } catch (_error) {
        return new Error('Error: something went wrong getting a new token')
      }
    }
    console.log(messageObject, 'MESSAGE OBJECT')
    console.log(translateTo, 'LANG SEGMENT')

    if(!propmtCollection[translateTo]) {
      throw new Error(`Error: not specified pair of languges for translation: ${translateTo}`)
    }

    const response = await instance.post(
      'https://gigachat.devices.sberbank.ru/api/v1/chat/completions',
      {
        model: 'GigaChat:latest',
        max_tokens: 1000,
        // eslint-disable-next-line
        messages: [
          {
            role: 'system', // контекст
            content: propmtCollection[translateTo]
          },
          {
            role: 'user', // запрос пользователя
            content: messageObject.text
          }
        ]
      },
      {
        headers: {
          Authorization: 'Bearer ' + this.token,
          Accept: 'text/event-stream',
          'Content-Type': 'application/json'
        }
      })

    return response
  }
}
