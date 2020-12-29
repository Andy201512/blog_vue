<template>
  <main class="container">
    <p>welcome to this website.</p>
  </main>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      
    }
  },
  mounted () {
    
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  padding-bottom: 50px; /*设置大于footer高度，防止被footer覆盖*/
}
p{
  padding: 200px 0px;
}
</style>
