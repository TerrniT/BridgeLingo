import { TranslateToEnum } from 'src/types'
import { propmtCollection } from './propmt'

type TranslationHelper = {
    [key in TranslateToEnum]: string
}

export const translationHelper: TranslationHelper = {
  en_to_ru: propmtCollection.en_to_ru,
  en_to_zh: propmtCollection.en_to_zh,
  ru_to_en: propmtCollection.ru_to_en,
  ru_to_zh: propmtCollection.ru_to_zh,
  zh_to_en: propmtCollection.zh_to_en,
  zh_to_ru: propmtCollection.zh_to_ru
}
