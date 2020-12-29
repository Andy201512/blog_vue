<template>
  <main class="container">
    <li v-for="item in article_list.results" v-bind:key=item.id><a v-bind:href="'/detail/id=' + item.id">{{ item.title }}</a></li>
  </main>
</template>

<script>
import axios from 'axios'

axios.defaults.baseURL = '/api'

export default {
  name: 'Content',
  data () {
    return {
      article_list : {
      }
    }
  },
  mounted () {
    axios
    .get('/api/v1/articles/')
    .then(response => (this.article_list = response.data))
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  padding-bottom: 50px; /*设置大于footer高度，防止被footer覆盖*/
}
</style>
