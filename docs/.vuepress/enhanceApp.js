import TipInit from '@theme/components/Tip/index';
import Preview from '@theme/components/Preview/index'
import routes from './routes.js'

export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
}) => {
    // ...做一些其他的应用级别的优化
    // 添加路由
    router.addRoutes(routes)
    // 添加弹窗组件
    Vue.use(TipInit)
    // 添加预览组件
    Vue.use(Preview)
    // eventbus
    const bus = new Vue();
    Vue.prototype.$bus = bus;
}