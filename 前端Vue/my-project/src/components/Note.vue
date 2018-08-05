<template>
  <div>
    <div class="container">
      <div class="row">
        <!-- 面板 -->
        <div class="panel panel-info">
          <div class="panel-heading">
            <h3 class="panel-title">我的笔记</h3>
          </div>
          <div class="panel-body">
            <div class="col-md-3">
              <!-- 左边笔记列表 开始 -->
              <NoteList></NoteList>
              <!-- 左边笔记列表 结束 -->
            </div>

            <div class="col-md-9">
              <!-- 右边笔记编辑区 开始 -->
              <div class="note-edit">
                <NoteEdit></NoteEdit>
              </div>
              <!-- 右边笔记编辑区 结束 -->
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //导入NoteList
  import NoteList from '@/components/NoteList.vue'
  import NoteEdit from '@/components/NoteEdit.vue'
  export default {
    name: "Note",
    // 加载这个组建的时候 先要去找 NoteList
    components: {
      NoteList,
      NoteEdit
    }
  }
</script>

<style>
  .note-edit {
    height: 600px;
    /*border: 1px solid grey;*/
  }
</style>
