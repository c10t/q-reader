<template>
<el-menu mode="horizontal" :router="true">
  <el-menu-item index="1" style="pointer-events:none;"> Nuxt News App </el-menu-item>
  <el-menu-item index="2" :route="{ path: '/posts/' }"> Posts </el-menu-item>
  <no-ssr>
    <el-menu-item index="4" style="float: right;" :route="{ path: '/' }"><span> Sign In </span></el-menu-item>
  </no-ssr>
  <el-menu-item index="5" style="float: right;" :route="{ path: '/posts/new' }">New Post</el-menu-item>
</el-menu>
</template>
