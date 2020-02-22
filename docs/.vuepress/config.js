module.exports = {
  title: 'Dermis',
  description: 'Set of tools for application styling',
  base: '/dermis/',
  plugins: [
    '@vuepress/back-to-top',
    ['@vuepress/pwa', { serviceWorker: true, updatePopup: false }],
    'demo-block'
  ],
  chainWebpack(config) {
    config.resolve.alias.set('vue$', 'vue/dist/vue.common');
    config.node.set('global', true);
  },
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { property: 'og:image', content: 'https://preusx.github.io/dermis/logo.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/favicon/ms-icon-144x144.png' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'white' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Dermis' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'application-name', content: 'Dermis' }],
    ['meta', { name: 'theme-color', content: '#7d4cdb' }],
    ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/img/favicon/apple-icon-57x57.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/img/favicon/apple-icon-60x60.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/img/favicon/apple-icon-72x72.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/img/favicon/apple-icon-76x76.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/img/favicon/apple-icon-114x114.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/img/favicon/apple-icon-120x120.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/img/favicon/apple-icon-144x144.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/img/favicon/apple-icon-152x152.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/favicon/apple-icon-180x180.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192',  href: '/img/favicon/android-icon-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/img/favicon/favicon-96x96.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],

    ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],

  ],
  locales: {
    '/': {
      lang: 'en-US'
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'Dermis',
      description: 'Набор утилит для стилизации приложения',
    }
  },
  themeConfig: {
    repo: 'preusx/dermis',
    docsRepo: 'preusx/dermis',
    docsDir: 'docs',
    logo: '/logo.svg',
    editLinks: true,
    sidebarDepth: 2,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Help us improve this page!',
        lastUpdated: 'Last Updated',
        nav: [
          { text: 'Guide', link: '/ru/guide/' },
          { text: 'Modules', link: '/ru/modules/base/' }
        ]
      },
      '/ru/': {
        label: 'Русский',
        selectText: 'Языки',
        editLinkText: 'Помогите нам исправить эту страницу!',
        lastUpdated: 'Изменено',
        nav: [
          { text: 'Гайд', link: '/ru/guide/' },
          { text: 'Модули', link: '/ru/modules/base/' }
        ],
        sidebar: {
          '/ru/guide/': [
            '',
          ],
          '/ru/modules/': [
            'base',
            'rut',
            'mq',
            'eq',
            'tone',
            'type',
            {
              title: 'Структурирующие',
              type: 'group',
              collapsable: false,
              children: [
                'structural/grid',
                'structural/aspect-ratio',
                'structural/panel',
                'structural/section'
              ]
            },
            {
              title: 'Контент',
              type: 'group',
              collapsable: false,
              children: [
                'content/caption',
                'content/link',
                'content/table',
                'content/inliner',
              ]
            },
            {
              title: 'Управляющие элементы',
              type: 'group',
              collapsable: false,
              children: [
                'controls/box',
                'controls/checker',
                'controls/stack',
              ]
            }
          ],
        },
      }
    }
  },
  postcss: {
    plugins: [
      require('autoprefixer')({}),
      require('css-mqpacker')({
        sort: true,
      }),
    ]
  }
};