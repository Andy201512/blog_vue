<template>
  <header>
    <a href="/index">网络日志</a>
    <nav class="clearfix">
      <ul class="clearfix">
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
  margin: 0;
  padding: 0;
}

li {
  float: left;
  list-style: none;
  margin-left: 180px;
  margin-right: 180px;
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
</style>
