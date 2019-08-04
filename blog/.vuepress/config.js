module.exports = {
  title: 'Clancy小屋',
  description: '随你肆意颤抖',
  base: '/',
  dest: 'dist/',
  theme: 'ououe',
  head: [
    ['link', { rel: 'icon', href: 'icon.ico' }]
  ],
  themeConfig: {
    defaultTheme: 'light',
    cover: '/cover.jpg',
    logo: '/logo.png',
    search: true,
    useVssue: true,
    pageGroup: 5,
    postTime: {
      createTime: '创建时间',
      lastUpdated: '最后修改'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '教育技术', link: '/IT/' },
      { text: '前端', link: '/Front/' },
      { text: '杂谈', link: '/Comment/' },
      { text: 'TypeScript', link: '/TS/' },
      { text: 'Rust', link: '/Rust/' },
      { text: '分类', link: '/category/' },
      { text: '关于', link: '/About/' }
    ],
    footer: [
      { text: 'Github', link: 'https://github.com/linsicong003' }
    ]
  },
  postcss: {
    plugins: [
      require('css-prefers-color-scheme/postcss'),
      require('autoprefixer')
    ]
  },
  plugins: [
    // add vuepress-plugin-container
    ['container', {
      type: 'right',
      defaultTitle: ''
    }],
    ['container', {
      type: 'tip',
      before: info => `<div class="tip"><p class="title">${info}</p>`,
      after: '</div>'
    }],
    ['container', {
      type: 'warning',
      before: info => `<div class="warning"><p class="title">${info}</p>`,
      after: '</div>'
    }],
    ['container', {
      type: 'danger',
      before: info => `<div class="danger"><p class="title">${info}</p>`,
      after: '</div>'
    }], 
    'reading-progress',
    ['@vssue/vuepress-plugin-vssue', {
      // set `platform` rather than `api`
      platform: 'github',

      // all other options of Vssue are allowed
      owner: 'Clancy',
      repo: 'https://github.com/linsicong003/myBlog',
      clientId: 'f91ff9a1205ad9ac7c60',
      clientSecret: 'c4fd8f99a68ae9742e96dd8824e48e6cc9a36018',
    }]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir',
        '@img': 'public/image'
      }
    }
  }
}
