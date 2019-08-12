const path = require('path')

module.exports = {
    title: 'Clancy小屋',
    description: '随你肆意颤抖',
    base: '/',
    dest: 'dist/',
    head: [
        ['link', { rel: 'icon', href: 'icon.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    themeConfig: {
        author: 'Clancy Lin',
        type: 'blog',
        logo: 'https://raw.githubusercontent.com/linsicong003/blog-img/master/logo.jpg',
        background: 'image/background/4.jpg',
        lastUpdated: '最后更新',
        nav: [
            { text: '首页', link: '/', icon: 'reco-gitlab' },
            { text: '教育技术', link: '/category/IT/', icon: 'reco-eye' },
            {
                text: '前端', icon: 'reco-api', items: [
                    { text: '前端基础', link: '/category/Front/' },
                    { text: '杂谈', link: '/category/Comment/' },
                ]
            },
            { text: 'TypeScript', link: '/category/TS/', icon: 'reco-three' },
            { text: 'Rust', link: '/category/Rust/', icon: 'reco-npm' },
            {
                text: '关于', icon: 'reco-other', items: [
                    { text: '关于我', link: '/category/About/' },
                    { text: '分类', link: '/category/' },
                ]
            }
        ],
        sidebar: [
            '/'
        ],
        footer: [
            { text: 'Github', type: "image/x-icon", link: 'https://github.com/linsicong003' }
        ],
        home: {
            topImg: 'cover.jpg'
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@image': 'public/image',
                '@bg': 'image/background'
            }
        }
    },
    plugins: [
        'reading-progress',
        ['@vssue/vuepress-plugin-vssue', {
            // 设置 `platform` 而不是 `api`
            platform: 'github',

            // 其他的 Vssue 配置
            owner: 'Clancy',
            repo: 'https://github.com/linsicong003/myBlog',
            clientId: 'f91ff9a1205ad9ac7c60',
            clientSecret: 'c4fd8f99a68ae9742e96dd8824e48e6cc9a36018',
        }],
        // vue 组件
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
    ]
}