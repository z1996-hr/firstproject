<template>
  <div id="app">
    <h2>首页</h2>
    <router-link to='/weather'><button>查询天气</button></router-link>
     <router-link to='/mp3'><button>听音乐</button></router-link>
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app{
    margin:100px auto;
    text-align: center;
  }
  #app router-link :hover{
    color:red;
    scale: 1.5;
  }
</style>
