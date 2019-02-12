<template>
  <section class="container posts-page">
    <el-card>
      <div slot="header">
        <span>Posts</span>
      </div>
      <el-table :data="showPosts" style="width: 100%" class="table">
        <el-table-column prop="title" label="Title"></el-table-column>
        <el-table-column prop="user.id" label="By" width="180"></el-table-column>
        <el-table-column prop="created_at" label="At" width="240"></el-table-column>
      </el-table>
    </el-card>
  </section>
</template>

<script>
export default {
  computed: {
    showPosts() {
      return [
        {
          id: '001',
          title: 'How to development Nuxt.js App',
          body: 'Lorem ipsum dolor sit amet, ...',
          created_at: '2018/08/10 12:00:00',
          user: {
            id: 'hoge'
          }
        },
        {
          id: '002',
          title: 'How to test Nuxt.js App',
          body: 'Lorem ipsum dolor sit amet, ...',
          created_at: '2018/08/10 12:59:00',
          user: {
            id: 'piyo'
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
.posts-page .el-table__row {
  cursor: pointer;
}
</style>