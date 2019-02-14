<template>
  <div id="app">
    <h2 class="title">Tasks</h2>
    <ul>
      <li v-for="task in tasks" v-bind:key="task.id">
        <input type="checkbox" v-bind:checked="task.done" v-on:change="toggleTaskStatus(task)">{{ task.name }}
      </li>
    </ul>

    <form v-on:submit.prevent="addTask">
      <input class="input" type="text" placeholder="New Task" v-model="newTaskName">
    </form>
  </div>
</template>

<script lang="ts" src="./app.ts"></script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
