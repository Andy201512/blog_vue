<template>
  <main>
    <div id="alpha">
      <h2>{{ article_info.title}}</h2>
      <p>创建时间：<time v-bind:datetime="article_info.created_time">{{ article_info.created_time }}</time></p>
      <p>修改时间：<time v-bind:datetime="article_info.modifyed_time">{{ article_info.modifyed_time }}</time></p>
      <p>阅读量：{{ article_info.views }}</p>
      <p>分类：{{ article_info.category.name }}</p>
      <p> 标签：<span v-for="item in article_info.tags" v-bind:key="item.id">{{ item.name }}、</span></p>
      <p>简介：{{ article_info.excerpt }}</p>
      <img v-bind:src="article_info.img" alt="此处应有文章图片" />
    </div>
    <div id="beta" v-html="article_info.body"></div>
  </main>
</template>

<script>
import axios from 'axios'

axios.defaults.baseURL = '/api'

export default {
  name: 'Content',
  data () {
    return {
      article_info : {
        category : {}
      }
    }
  },
  mounted () {
    let id =  window.location.pathname.match(/\d+/)[0]
    
    axios
    .get('/api/v1/articles/' + id + '/')
    .then(response => (this.article_info = response.data))
  }
}
</script>

<style scoped>
#alpha {
  text-align: center;
}
#beta {
  padding: 0px 40%;
}
</style>
