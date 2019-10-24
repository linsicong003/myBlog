const path = require('path')

module.exports = {
    title: 'Clancy小屋',
    description: '慢慢来   比较快',
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
                    { text: 'TypeScript', link: '/category/TS/' },
                    { text: '杂谈', link: '/category/Comment/' },
                ]
            },
            { text: '每日练题', link: '/category/DailyTest/Navigator', icon: 'reco-three' },
            { text: '时光机', link: '/timeLine', icon: 'reco-npm' },
            {
                text: '关于', icon: 'reco-other', items: [
                    { text: '关于我', link: '/category/About/' },
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
    markdown: {
        lineNumbers: true
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
        ['reading-progress'],
        ['seo'],
        ['@vuepress/active-header-links'],
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-146142841-1' // UA-00000000-0
            }
        ],
        // ['@vssue/vuepress-plugin-vssue', {
        //     // 设置 `platform` 而不是 `api`
        //     platform: 'github',

        //     // 其他的 Vssue 配置
        //     owner: 'Clancy',
        //     repo: 'https://github.com/linsicong003/myBlog',
        //     clientId: 'f91ff9a1205ad9ac7c60',
        //     clientSecret: 'c4fd8f99a68ae9742e96dd8824e48e6cc9a36018',
        // }],
    ]
}