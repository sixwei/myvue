<template>
  <div class="content-wrapper">
    <div class="title-wrapper">
      {{msg}}
    </div>
    <template>
      <ul class="ul-wrapper">
        <li>
          <router-link to="/graph/lianxian">连线</router-link>
        </li>
        <li>
          <router-link to="/graph/zIndex">层次</router-link>
        </li>

      </ul>
    </template>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '这是graph主页',
      }
    },


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .content-wrapper{
    padding: 50px 15px;
    height: 100%;
    width: 100%;
    .title-wrapper{
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      padding-left: 50px;
    }
    .ul-wrapper{
      &>li{
        display: inline-block;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        padding-left: 100px;
      }
    }
  }

</style>
