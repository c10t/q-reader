<template>
  <section class="container">
    <el-card>
      <div slot="header" class="clearfix"><span>Sign In</span></div>
      <form>
        <div class="form-content">
          <span>USER ID</span>
          <el-input placeholder="" v-model="formData.id" />
        </div>
        <div class="form-content">
          <el-checkbox v-model="isCreateMode">Create New Account</el-checkbox>
        </div>
        <div class="text-right">
          <el-button type="primary">{{ buttonText }}</el-button>
        </div>
      </form>
    </el-card>
  </section>
</template>

<script>
export default {
  asyncData() {
    return {
      isCreateMode: false,
      formData: {
        id: ''
      }
    }
  },
  computed: {
    buttonText() {
      return this.isCreateMode ? 'Create' : 'Sign In'
    }
  }
}
</script>

<style scoped>
.form-content {
  margin: 16px 0;
}
</style>
