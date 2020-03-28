const TimeLine = () => import('@theme/layouts/Layout.vue')
const Layout = () => import('@theme/layouts/Layout.vue')

export default [
    {
        path: '/timeLine*',
        name: 'timeLine',
        component: TimeLine
    },
    {
        path: '/AboutMe*',
        name: 'AboutMe',
        component: Layout
    }
]