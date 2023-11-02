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
