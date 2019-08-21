/* global AHL_SIDEBAR_LINK_SELECTOR, AHL_HEADER_ANCHOR_SELECTOR */
// 阅读文章时标题栏跟随滚动显示
import throttle from 'lodash.throttle'
const AHL_HEADER_ANCHOR_SELECTOR = '.header-anchor'
const AHL_SIDEBAR_LINK_SELECTOR = '.sidebar-link'

export default {
    data() {
        return {
            common: null
        }
    },
    mounted() {
        this.common = document.getElementById('common')
        this.common.addEventListener('scroll', this.onScroll)
    },

    methods: {
        onScroll: throttle(function () {
            this.setActiveHash()
        }, 300),

        setActiveHash() {
            const sidebarLinks = [].slice.call(document.querySelectorAll(AHL_SIDEBAR_LINK_SELECTOR))
            const anchors = [].slice.call(document.querySelectorAll(AHL_HEADER_ANCHOR_SELECTOR))
                .filter(anchor => sidebarLinks.some(sidebarLink => sidebarLink.hash === anchor.hash))

            const scrollTop = Math.max(
                window.pageYOffset,
                document.documentElement.scrollTop,
                document.body.scrollTop,
                this.common.scrollTop
            )

            const scrollHeight = Math.max(
                document.documentElement.scrollHeight,
                document.body.scrollHeight,
                this.common.scrollHeight
            )

            const bottomY = this.common.innerHeight + scrollTop

            for (let i = 0; i < anchors.length; i++) {
                const anchor = anchors[i]
                const nextAnchor = anchors[i + 1]

                const isActive = i === 0 && scrollTop === 0
                    || (scrollTop >= anchor.parentElement.offsetTop + 10
                        && (!nextAnchor || scrollTop < nextAnchor.parentElement.offsetTop - 10))

                const routeHash = decodeURIComponent(this.$route.hash)
                if (isActive && routeHash !== decodeURIComponent(anchor.hash)) {
                    const activeAnchor = anchor
                    // check if anchor is at the bottom of the page to keep $route.hash consistent
                    if (bottomY === scrollHeight) {
                        for (let j = i + 1; j < anchors.length; j++) {
                            if (routeHash === decodeURIComponent(anchors[j].hash)) {
                                return
                            }
                        }
                    }
                    this.$vuepress.$set('disableScrollBehavior', true)
                    this.$router.replace(decodeURIComponent(activeAnchor.hash), () => {
                        // execute after scrollBehavior handler.
                        this.$nextTick(() => {
                            this.$vuepress.$set('disableScrollBehavior', false)
                        })
                    })
                    return
                }
            }
        }
    },

    beforeDestroy() {
        this.common.removeEventListener('scroll', this.onScroll)
    }
}
