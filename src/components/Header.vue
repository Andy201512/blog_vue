<template>
  <header>
    <p id="logo">Logo</p>
    <nav>
      <ul>
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
header{
  display: flex;
}
p{
  flex-grow: 1;
  text-align: center;
}
nav{
  flex-grow: 3;
}
ul{
  display: flex;
}
li{
  flex-grow: 1;
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
</style>
