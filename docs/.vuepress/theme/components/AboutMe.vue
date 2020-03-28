<template>
  <div class="about-container">
      <!-- 头像 -->
      <div class="flex-row-center icon">
          <img :src="$withBase($frontmatter.faceImage || $themeConfig.logo)"/>
      </div>
      <!-- 名字 -->
      <div class="flex-column-center name">
          <p>林思聪</p>
          <p>Clancy Lin</p>
      </div>
      <!-- 邮箱 -->
      <div class="flex-row-center mail">
          linsicong003@163.com
      </div>
      <!-- 说明 -->
      <div class="flex-column-center title-wrap">
          <div class="title">
            <p>前端工程狮</p>
            <p>华南农业大学</p>
            <p>喜欢吉他/钢琴/摄影/吃吃喝喝</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",

};
</script>

<style lang="stylus" scoped>
p
    margin 0
.about-container 
    box-sizing border-box
    padding-top 3.6rem
    width 100%
    // background url('https://raw.githubusercontent.com/linsicong003/blog-img/master/about-bg.jpg') no-repeat
    // background-size contain
    .icon
        width 100%
        height 15rem
        img 
            width 10rem
            height 10rem
            border-radius 100%
    .name 
        font-size 1.8rem
        font-weight bold
        p 
            margin 0.5rem
    .mail
        font-size 1.5rem
        margin-top 1rem
        font-weight bold
    .title-wrap 
        width 100%
        position relative
    .title
        box-sizing border-box
        padding-top 2rem
        font-size 1.3rem
        margin-top 10rem
        border-top 1px solid #eaecef
        width 30rem
        text-align center
        p
            margin 1rem

@media (max-width: $MQMobile)
 .about-container
     .title
        width 20rem       
</style>
