<template>
  <ul class="todo-main">
    <todoItem v-for="(todo,index) in todos" :key="index" :todo="todo":delete-todo="deleteTodo" :index="index"> </todoItem>
  </ul>
</template>

<script type="text/ecmascript-6">
 import todoItem from './todoItem.vue'

  export default{
     props:{
         todos:Array,
         deleteTodo:Function
     },
     components: {
       todoItem
     }

  }


</script>




<style>
  /* main */
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
