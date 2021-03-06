<template>
  <div class="main-tag-wrapper" ref="mainTag">  
    <div class="tags-wrapper" :class="recoShow?'reco-show': 'reco-hide'">
      <Common :sidebar="false" :isComment="false"></Common>
      <div class="tags">
        <span 
          v-for="(item, index) in tags" 
          :key="index"
          :class="{'active': item.name == currentTag}"
          :style="{ 'backgroundColor': item.color }"
          @click="getPagesByTags(item.name)">{{item.name}}</span>
      </div>
      <note-abstract 
        class="list"
        :data="posts"
        :currentPage="currentPage"
        :currentTag="currentTag"
        @currentTag="getCurrentTag"></note-abstract>
      
      <pagation 
        class="pagation"
        :data="posts"
        :currentPage="currentPage"
        @getCurrentPage="getCurrentPage"></pagation>
    </div>
  </div>
</template>

<script>
import Common from '@theme/components/Common.vue'
import NoteAbstract from '../components//NoteAbstract.vue'
import Pagation from '../components//Pagation.vue'

export default {
  components: { Common, NoteAbstract, Pagation },

  data () {
    return {
      posts: [],
      tags: [],
      currentTag: '',
      currentPage: 1,
      recoShow: false
    }
  },

  created () {
    if (this.$tags.list.length > 0) {
      const currentTag = this.$route.query.tag ? this.$route.query.tag : this.$tags.list[0].name
      let tags = this.$tags.list
      tags.map(item => {
        const color = this._tagColor()
        item.color = color
        return tags
      })
      this.tags = tags

      this.getPagesByTags(currentTag)
    }
  },

  mounted () {
    this.recoShow = true
  },

  methods: {

    // 根据分类获取页面数据
    getPagesByTags (currentTag) {

      this.currentTag = currentTag

      let posts = this.$tags.map[currentTag].posts
      posts.sort((a, b) => {
        return this._getTimeNum(b) - this._getTimeNum(a)
      })
      // reverse()是为了按时间最近排序排序
      this.posts = posts.length == 0 ? [] : posts
      
      this.getCurrentPage(1);
    },

    getCurrentTag (tag) {
      this.$emit('currentTag', tag)
    },

    getCurrentPage (page) {
      this.currentPage = page
      this.$page.currentPage = page
      this.$refs.mainTag && (this.$refs.mainTag.scrollTop = 0)    
    },

    _tagColor () {
      // 红、蓝、绿、橙、灰
      const tagColorArr = ['#f26d6d', '#3498db', '#67cc86', '#fb9b5f', '#838282']
      const index = Math.floor(Math.random() * tagColorArr.length)
      return tagColorArr[index]
    },

    // 获取时间的数字类型
    _getTimeNum (date) {
      return parseInt(new Date(date.frontmatter.date).getTime())
    }
  }
}
</script>

<style src="../styles/theme.styl" lang="stylus"></style>

<style lang="stylus" scoped>
@require '../styles/loadMixin.styl'
.main-tag-wrapper /deep/
  height: 100vh;
  overflow: auto;
  .theme-container 
    height: 10vh;
.tags-wrapper
  max-width: 740px;
  margin: 0 auto;
  padding: 4.6rem 2.5rem 0; 
  .tags
    margin 30px 0
    span
      vertical-align: middle;
      margin: 4px 4px 10px;
      padding: 4px 8px;
      display: inline-block;
      cursor: pointer;
      border-radius: 2px;
      background: #fff;
      color: #fff;
      font-size: 13px;
      box-shadow 0 1px 4px 0 rgba(0,0,0,0.2)
      transition: all .5s
      &:hover
        transform scale(1.04)
      &.active
        transform scale(1.2)
  &.reco-hide {
    .tags, .list, .pagation {
      load-start()
    }
  }
  &.reco-show {
    .tags {
      load-end(0.08s)
    }
    .list {
      load-end(0.16s)
    }
    .pagation {
      load-end(0.24s)
    }
  }      

@media (max-width: $MQMobile)
  .tags-wrapper
    padding: 5rem 0.6rem 0;
</style>