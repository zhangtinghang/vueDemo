import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)

const messages = {
  'en-US': {
    ...enLocale,
  },
  'zh-CN': {
    ...zhLocale,
  }
}

const i18n = new VueI18n({
  local: 'zh-CN',
  messages // set locale messages
})

export default i18n
