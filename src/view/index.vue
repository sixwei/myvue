<template>
  <div class="content-wrapper">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" :active-name="active" @on-select="changeMenu">
          <!--<div class="layout-logo">

          </div>-->
          <template v-for="item in appMenu">
            <MenuItem  v-if="!item.item" :key="item.name" :name="item.link">
              {{ item.name }}
            </MenuItem>
            <Submenu v-if="item.item" :name="item.link" :key="item.name">
              <template slot="title">
                <span class="layout-text">{{ item.name }}</span>
              </template>
              <template v-for="child in item.item">
                <MenuItem :name="child.link" :key="child.name">
                  {{ child.name }}
                </MenuItem>
              </template>
            </Submenu>

          </template>

        </Menu>
      </Header>
      <Content >

        <transition>
          <router-view :key="key" style="padding: 20px 10px; display: inline"></router-view>
        </transition>

      </Content>
    </Layout>
  </div>
</template>

<script>
  import {appMenus} from '../store/appMenus'
  export default {
    data () {
      return {
        msg: '你是谁啊',
        appMenu:appMenus.menus,
        active:'home',
      }
    },
    methods:{
      changeMenu:(item)=>{
        console.log(item)
        this.$router.push({name:item})
      }
    },
    computed:{},

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .content-wrapper{
    width:100%;
    height: 100%;
  }

</style>
