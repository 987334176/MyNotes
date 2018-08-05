// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jQuery from 'jquery'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'
Vue.use(Vuex)  //使用vuex

// 设置post请求的请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 定义一个大仓库，用来存放我项目组件中用到的数据
const store = new Vuex.Store({
  state: {
    noteList: []
  },
  mutations: {
    // 修改仓库中状态的唯一方法就是通过提交mutation
    ADDNOTE: function (state, note) {
      state.noteList.push(note)
      // 将新笔记数据添加到noteList(同步操作)
    },
    INITNOTELIST: function (state, noteList) {
      state.noteList = noteList
    }
  },
  actions: {
    // 拉取最新的笔记数据
    getNoteList: function (context, noteList) {
      axios.get('http://127.0.0.1:8000/api/notes/')
        .then((res)=> {
          console.log('我要去后端拉取笔记数据啦！');
          console.log(res.data.data)
          // 将获取到的笔记数据 放到大仓库中
          // _this.$store.state.noteList = res.data
          context.commit('INITNOTELIST', res.data.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 所有异步操作都放在这个actions中
    addNote(context, note) {
      // 先将新笔记数据post到后端 (异步操作)
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/add/',
        data: qs.stringify(note)  // 将js对象转换成字符串格式
      })
        .then(function (res) {
          console.log(res)
          // 提交mutation
          context.commit('ADDNOTE', note)
        })
        .catch(function (error) {
          console.log(error)
        });
    },
    // 删除笔记的异步操作
    removeNote(context, id) {
      return new Promise(function (resolve, reject) {
        // 先将新笔记数据post到后端 (异步操作)
        axios({
          method: 'get',
          url: 'http://127.0.0.1:8000/api/delete/' + id,
        })
          .then(function (res) {
            console.log(res)
            // 提交mutation
            // 删除成功之后要再去拉取最新的笔记数据
            resolve()
          })
          .catch(function (error) {
            console.log(error)
            reject(error)
          });
      })
    }
  }
})

Vue.config.productionTip = false
//Web代码语法高亮库
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai.css' //样式文件
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store, //将上面定义的大仓库与vue实例建立联系
  components: { App },
  template: '<App/>',
  beforeMount: function () {  //挂载之前操作
    // 去后端拉取笔记数据
    // 通过ajax拉取
    var _this = this;
    axios.get('http://127.0.0.1:8000/api/notes/')
      .then(function (res) {
        console.log('我要去后端拉取笔记数据啦！');
        console.log(res.data.data)
        // 将获取到的笔记数据 放到大仓库中
        // _this.$store.state.noteList = res.data
        //获取后端数据,调用commit,执行INITNOTELIST方法修改大仓库
        _this.$store.commit('INITNOTELIST', res.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
})
