<template>
  <Header/>
  <Content/>
  <Footer/>
</template>

<script>
import Header from './../../components/Header.vue'
import Content from './Content.vue'
import Footer from './../../components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
