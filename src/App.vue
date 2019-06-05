<template>
  <div id="app">
    <index></index>
    <router-view></router-view>

  </div>
</template>
<script>
import index from './components/index'
export default {
  components:{
    index
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
</style>
