# Nuxt2 + tailwind + pinia + darkMode Template

> Darkmode with tailwind

### Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://www.nuxtjs.cn/guide).

### Plugins Files Introduction
- i18n.js
  - 預設只有`en`和`tw`，要新增其他語言請至`lang/`裡設置，記得`nuxt.config.js`也要修改
- axios.js
  - 封裝了`hooks`在`composables/useApis`裡組件內可以直接調用，範例請參照`pages/axios.vue`
- remock.js
  - 搭配了`$i18n`在切換語言時拿不同語言的資料


### Use UI
- [tailwindcss](https://tailwindcss.com/)
- [maju-ui](https://www.npmjs.com/package/maju-ui)

### Use Plugins
- [@nuxt/i18n](https://i18n.nuxtjs.org/)
- [@pinia/nuxt](https://www.npmjs.com/package/@pinia/nuxt)
- [@nuxtjs/tailwindcss](https://tailwindcss.nuxtjs.org/)
- [Iconify Icon web component](https://docs.iconify.design/iconify-icon/)
  - 用法
  ```
    <iconify-icon
      icon="fa6-solid:language"
      style="color: #ba3329; font-size: 48px"
    ></iconify-icon>
  ```
- [remock.js](https://www.npmjs.com/package/remockjs)

### Reference Template
- [nuxt-i18n-example](https://github.com/paulgv/nuxt-i18n-example)
- [nuxt-tailwind-darkmode](https://github.com/fayazara/nuxt-tailwind-darkmode)
