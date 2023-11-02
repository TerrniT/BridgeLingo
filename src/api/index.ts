import api from './api'

import { config } from 'dotenv'
config()

const gigachatApiUrl = process.env.AI_API_URL || ''

if (!gigachatApiUrl) new Error('Error: gigachat api url does not exist')

api.setBaseURL(gigachatApiUrl)
