import en from '../lang/en-US.js'
import tw from '../lang/zh-TW.js'

export const i18nConfig = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      flag: 'openmoji:flag-us-outlying-islands',
    },
    {
      code: 'tw',
      iso: 'zh-TW',
      name: '中文',
      flag: 'emojione-v1:flag-for-taiwan',
    }
  ],
  defaultLocale: 'tw',
  vueI18n: {
    fallbackLocale: 'tw',
    messages: { en, tw }
  }
}
