<template>
  <!--<link href="http://cdn.bootcss.com/highlight.js/8.0/styles/monokai_sublime.min.css" rel="stylesheet">-->
  <!--<script src="http://cdn.bootcss.com/highlight.js/8.0/highlight.min.js"></script>-->
  <!--<script >hljs.initHighlightingOnLoad();</script>-->
  <div id="app">
    <!--导航条-->
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Brand</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <!--<li class="active">-->
              <!--<router-link to="/">我的首页</router-link>-->
            <!--</li>-->
            <!--<li>-->
              <!--<router-link to="/note">我的笔记</router-link>-->
            <!--</li>-->
            <!--
          <router-link
            v-for="(route, index) in allRoutes"  : allRoutes是一个计算属性
            v-bind:to="route.path"               : 取每一项路由的path
            v-bind:key=index                     : for循环vue推荐绑定key，key用来标示for循环的每一项
            tag='li'                             : 告诉router-link渲染的时候 渲染成li标签
            activeClass='active'                 : 当当前的router-link被选中的时候 添加的 class样式
            exact                                : 指定路由为严格匹配模式，而不是默认的以。。。开头
            >
            <a>{{route.name}}</a>                : 取每一个路由的name
          </router-link>
         -->
            <router-link
              v-for="(route, index) in allRoutes"
              v-bind:to="route.path"
              v-bind:key=index
              tag='li'
              activeClass='active'
              exact
            >
              <a>{{route.name}}</a>
            </router-link>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">登录</a></li>
            <li class="dropdown">
            <li><a href="#">注册</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <!--路由出口-->
    <router-view></router-view>
  </div>
</template>

<script>
  //导入bootstrap
  import 'bootstrap/dist/css/bootstrap.min.css'
  import jQuery from 'jquery'
  export default {
    name: 'App',
    data:function(){
      return {}
    },
    //计算属性
    computed:{
      allRoutes:function(){
        // 从Vue实例里面取出所有的路由
        // console.log(this.$router.options.routes)
        return this.$router.options.routes
      }
    }
  }

</script>

<style>

</style>
