<template>
  <div class="row">
    <!-- 左边的 textarea 区域开始 -->
    <div class="col-md-6 height600">
      <div class="input-group">
        <span class="input-group-addon" id="basic-addon1">标题</span>
        <input
          v-model="title"
          type="text" class="form-control" placeholder="请输入标题" aria-describedby="basic-addon1">
      </div>

      <!-- textarea -->
      <textarea class="my-textarea"
                v-model="content"
      >

      </textarea>

    </div>
    <!-- 左边的 textarea 区域结束 -->

    <!-- 右边的 展示区 区域开始 -->
    <div class="col-md-6 height600">
      <div>
        <button v-on:click='addNote' class="btn btn-success">添加</button>
      </div>
      <!--展示原始html使用v-html-->
      <div class="right-box my-textarea"
           v-html="markedDownContent"
           v-highlight
      >
      </div>
    </div>
    <!-- 右变的 展示 区域结束 -->
  </div>
</template>


<script>
  //导入marked模块，用来处理makedown语法
  import marked from 'marked'

  export default {
    name: 'NoteEdit',
    data:function () {
      return {
        title:'',  //声明title变量
        content:''
      }
    },
    //增加计算属性
    computed:{
      markedDownContent:function(){
        return marked(this.content)
      }
    },
    methods:{
      addNote:function(){
        var noteObj = {
          title: this.title,
          content: this.content,
          markdownContent: this.markedDownContent
        }
        // 把新添加的笔记对象 发送到后端
        // this.$store.commit('ADDNOTE',noteObj)
        // 先分发action
        this.$store.dispatch('addNote',noteObj)
      }
    }
  }
</script>


<style>
  .my-textarea {
    margin-top: 15px;
    height: 80%;
    width: 100%
  }

  .height600 {
    height: 600px;
  }

  .right-box {
    border: 1px solid grey
  }
</style>
