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
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 100%;
}
</style>
