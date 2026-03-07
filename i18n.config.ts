import { getRequestConfig } from 'next-intl/server'

const timeZone = 'Asia/Phnom_Penh'

export const localePrefix = 'always'
export const locales = ['en', 'kh'] as const
export const defaultLocale = 'en' as const

export default getRequestConfig(async ({ locale }) => ({
  messages: (
    await (locale === 'en'
      ? import('@/messages/en.json')
      : import('@/messages/kh.json'))
  ).default,
  timeZone,
}))
