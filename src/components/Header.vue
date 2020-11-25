<template>
  <header>
    <p class="logo">Logo</p>
    <nav class="clearfix">
      <ul class="clearfix">
        <li><a href="/index">网络日志</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/list">文章列表</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
ul {
  float: right;
  list-style: none;
  margin: 0 700px 0 0;
  padding: 0;
}

li {
  float: left;
  list-style: none;
  margin-left: 40px;
  margin-right: 40px;
}

a {
  text-decoration: none;
  font-weight: bold;
  border-bottom: 4px solid transparent;
  padding-top: 10px;
  padding-bottom:10px;
}

a:hover {
  border-bottom: 4px solid #E8676B;
}

.clearfix::after {
  content: '';
  display: block;
  clear: both;
}

.logo {
  position: relative;
  top: 48px;
}
</style>
