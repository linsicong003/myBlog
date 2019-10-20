import Preview from './Preview.vue'

const VuePressPreview = {
    // 动画过渡时间   
    animateTime: 300,
    install(Vue) {
        if (typeof window !== 'undefined' && window.Vue) {
            Vue = window.Vue
        }
        // 装载组件
        Vue.component('VuePressPreview', Preview)
        // 弹窗函数
        const msg = (obj, callBack) => {
            // 初始化数据
            let { src, alt } = obj;
            // 弹窗实例
            // 单例模式
            let VuePreview = Vue.extend({
                render(h) {
                    let props = {
                        src, alt, show: this.show
                    }
                    return h('VuePressPreview', { props })
                },
                data() {
                    return {
                        show: false
                    }
                },
                methods: {
                    closeWrapper() {
                        this.show = false
                    }
                }
            })
            // 获取弹窗实例
            let newTip = new VuePreview()
            let vm = newTip.$mount()
            let el = vm.$el
            let app = document.getElementById('app')
             // 判断预览实例是否已存在
            let previewItem = document.querySelector('.v-preview')

            !previewItem && app.appendChild(el) // 把生成的提示的dom插入body中
            
            vm.show = true

            // 点击隐藏事件
            setTimeout(() => {
                let d = document.querySelector('.v-preview-main').addEventListener("click", () => {
                    vm.show = false
                    d = null
                })
            }, 0)
        }

        Vue.prototype['$preview'] = (obj) => {
            if (!obj) {
                throw Error('Please send attributes');
                return 
            }
            msg(obj)
        } 
    }
}

export default VuePressPreview