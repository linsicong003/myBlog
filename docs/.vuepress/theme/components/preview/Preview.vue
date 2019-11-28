<template>
    <transition name="preview">
        <div class='v-preview-container' v-if="show">
            <div class="v-preview-cover"></div>
            <div class="v-preview-main">
                <img class="v-preview" :src="src" :alt="alt"/>
            </div>
        </div>
    </transition>
    
</template>
<script>
export default {
    name:'imgPreview',
    props: {
        src: {
            type: String,
            default: '#'
        },
        alt: {
            type: String,
            default: '未知'
        },
        show: {
            type: Boolean,
            default: false
        }
    },
}
</script>
<style lang="stylus" scoped>    
.preview-enter-active, .preview-leave-active 
    transition all 0.3s
.preview-leave-to
    opacity 0
.v-preview-container
    width 100vw
    height 100vh
    position fixed
    top 0
    left 0
    z-index 9999
.v-preview-cover
    background-color #333
    opacity 0.6
    width 100%
    height 100vh
.v-preview-main
    position absolute
    width 100%
    height 100vh
    top 0
    left 0
    display flex
    flex-direction row
    justify-content center
    align-items center
    animation enter .3s ease-out
.v-preview 
    max-width 100%
    max-height 100%
@keyframes enter {
    from { transform: scale(0.2);}
    to { transform: scale(1);}    
}

@media (max-width:  $MQMobile)
    .v-preview 
        max-width 100%


</style>