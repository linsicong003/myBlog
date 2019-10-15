import Tip from './Tip.vue'

const BlogTip = {
    //弹窗显示时间
    duration: 3000,
    // 动画过渡时间   
    animateTime: 300,
    install(Vue) {
        if (typeof window !== 'undefined' && window.Vue) {
            Vue = window.Vue
        }
        // 装载组件
        Vue.component('BlogTip', Tip)
        // 弹窗函数
        const msg = (obj, callBack) => {
            // 初始化数据
            let type = obj.type || ''
            let title = obj.title || ''
            let content = obj.content || ''
            // 显示的时间，默认三秒
            let duration = obj.duration || BlogTip.duration
            // 弹窗实例
            let VueTip = Vue.extend({
                render(h) {
                    let props = {
                        type, title, content, show: this.show
                    }
                    return h('BlogTip', { props })
                },
                data() {
                    return {
                        show: false
                    }
                }
            })
            // 挂载弹窗
            let newTip = new VueTip()
            let vm = newTip.$mount()
            let el = vm.$el
            let app = document.getElementById('app')
            app.appendChild(el) // 把生成的提示的dom插入body中
            // document.body.appendChild(el) // 把生成的提示的dom插入body中
            vm.show = true
            let t1 = setTimeout(() => {
                clearTimeout(t1)
                vm.show = false  //隐藏提示组件，此时会有300ms的动画效果，等动画效果过了再从body中移除dom
                // newTip.$destroy()
                vm = null // 设置为null，好让js垃圾回收算法回收，释放内存

                callBack && (typeof callBack === 'function') && callBack.apply(this)

            }, duration)
        }

        // 挂载到vue原型上，暴露四个方法
        Vue.prototype['$tip'] = {
            info(obj, callBack) {
                if (!obj) return
                obj.type = 'info'
                msg(obj, callBack)
            },
            success(obj, callBack) {
                if (!obj) return
                obj.type = 'success'
                msg(obj, callBack)
            },
            error(obj, callBack) {
                if (!obj) return
                obj.type = 'error'
                msg(obj, callBack)
            },
            warning(obj, callBack) {
                if (!obj) return
                obj.type = 'warning'
                msg(obj, callBack)
            }
        }
    }
}

export default BlogTip