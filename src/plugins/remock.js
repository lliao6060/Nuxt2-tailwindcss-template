// plugins/mock.js
import { mock } from 'remockjs';

const timeout = 1500

const userList = mock({
  'list|10-15': [{
    'id|+1': 1,
    name: '@name("tw")',
    profession: '@word("tw", 3, 5)',
    email: '@email("gmail.com", 8, 12)',
    avatar: 'image("50x50", @color(), "#22222")'
  }]
});

export const mockUserList = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userList)
    }, timeout)
  })
}