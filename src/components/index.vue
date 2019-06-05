<template>
  <div class="index">
    <div class="nav">
      <div class="item" @click="toPath('/')" :class="this.$route.path === '/' ?  'active' : ''">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </div>
      <div class="item" @click="toPath('/goodlist')" :class="this.$route.path === '/goodlist' ?  'active' : ''">
        <i class="el-icon-s-fold"></i>
        <span>分类</span>
      </div>
      <div class="item" @click="toPath('/car')" :class="this.$route.path === '/car' ?  'active' : ''">
        <i class="el-icon-shopping-cart-full"></i>
        <span>购物车</span>
      </div>
      <div class="item" @click="toPath('/user')" :class="this.$route.path === '/user' ?  'active' : ''">
        <i class="el-icon-user"></i>
        <span>我的</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods:{
    toPath(path){
      this.$router.replace(path)
      console.log(this.$router);
      console.log(this.$route)
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  }
  .index{
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 15px 0;
    background: floralwhite;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
  .nav{
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
  }
  .item{
    display: flex;
    flex-direction:column;
    align-items: center;
  }
  .item:hover{
    cursor: pointer;
  }
  .item.active{
    color: red;
  }
</style>
