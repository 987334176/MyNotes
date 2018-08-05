<template>
  <div>
    <div class="list-group">
      <!--  在子组件声明 我需要被传入的参数
      v-for="note in NoteList"  : NoteList是一个数组对象,note是数组每一个对象
      v-bind:note='note'                  : 子组件声明,被传入的参数为note,值为note(它是一个对象)
      v-bind:key=note.id                  : for循环vue推荐绑定key，key用来标示for循环的每一项
      -->

      <NoteItem
        v-for="note in noteList"
        v-bind:note='note'
        v-bind:key="note.id"
      ></NoteItem>
    </div>
  </div>
</template>

<script>
  //导入NoteItem组件
  import NoteItem from '@/components/NoteItem.vue'
  export default {
    name: 'NoteList',
    components: {
      NoteItem
    },
    data:function(){
      return {
      }
    },
    computed:{
      noteList:function () {
        //从当前的vue实例的大仓库里找笔记列表
        return this.$store.state.noteList
      }
    }
  }
</script>

<style>
</style>
