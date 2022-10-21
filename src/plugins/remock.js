import { mock } from 'remockjs';
import { getCurrentInstance } from '@nuxtjs/composition-api'

const timeout = 1500

const userList = (locale) => {
  return mock({
    'list|10-15': [{
      'id|+1': 1,
      name: `@name("${locale}")`,
      profession: `@word("${locale}", 3, 5)`,
      email: '@email("gmail.com", 8, 12)',
      avatar: 'image("50x50", @color(), "#22222")'
    }]
  });
}

export const mockUserList = async () => {
  const { proxy } = getCurrentInstance()
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userList(proxy.$i18n.locale))
    }, timeout)
  })
}