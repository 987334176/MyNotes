<template>
  <!--渲染name变量-->
  <div class="list-group-item">{{note.title}}
    <span
      v-on:click='removeNote(note.id)'
      class="glyphicon glyphicon-trash pull-right"
    ></span>
  </div>
</template>

<script>
  export default {
    name: 'NoteItem',
    props: ['note'],  // 在子组件声明 我需要被传入的参数
    methods:{
      removeNote:function(id){
        // 删除当前笔记
        // 去数据库删除该id的笔记
        this.$store.dispatch('removeNote', id)
          .then(()=>{
            this.$store.dispatch('getNoteList')  // 再发送ajax请求去拉取最新的笔记数据
          })  // 发动ajax请求先去删除笔记
          .catch(function(err){
            console.log('这是在Noteitem组件中捕获到的错误')
            console.log(err)
          })
      }
    }
  }
</script>

<style>

</style>
