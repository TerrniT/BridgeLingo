export interface IMsgResponse {
  message_id: number
  from: {
    id: number
    is_bot: boolean
    first_name: string
    last_name: string
    username: string
    language_code: string
  }
  chat: {
    id: number
    first_name: string
    last_name: string
    username: string
    type: 'private' | 'public'
  }
  date: number
  text: string | number
}

export type TranslateToEnum =
    'en_to_zh' | // EnglishToChinese
    'en_to_ru' | // EnglishToRussian
    'ru_to_en' | // RussianToEnglish
    'ru_to_zh' | // RussianToChinese
    'zh_to_en' | // ChineseToEnglish
    'zh_to_ru' // ChineseToRussian

