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
  padding-top: 200px;
  padding-bottom: 200px;
}
</style>
