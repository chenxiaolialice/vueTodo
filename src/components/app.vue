<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todoHeader :add="add"> </todoHeader>
      <todoMain :todos="todos" :delete-todo="deleteTodo"> </todoMain>
      <todoFooter :todos="todos" :remove-completed="removeCompleted" :select-all-todos="selectAllTodos"> </todoFooter>
    </div>
  </div>
</template>

<script>
  import todoHeader from './todoHeader.vue'
  import todoMain from './todoMain.vue'
  import todoFooter from './todoFooter.vue'
  import localStorageUtil from '../util/localStorageUtil'

  export default{
      data(){
          return{
              todos:[]
          }
      },
      created(){
        // 从 local 中读取数据
        this.todos=localStorageUtil.getTodos()
      },
      methods:{

        add(todo){
          this.todos.unshift(todo)
        },
        deleteTodo(index){
            this.todos.splice(index,1)
        },
        removeCompleted(){// filter 过滤的到的是一个新的数组，长度发生了改变
            this.todos=this.todos.filter((todo)=>{
                return !todo.complete
            })
        },
        selectAllTodos(isSelect){
            this.todos.forEach(todo=>{
                todo.complete=isSelect
            })
        }
      },
      watch:{
         todos:{
          deep:true,// 深度监视
           /*handler(val){ // todos 发生了变化，保存todos 到localStorage
              localStorageUtil.saveTodos(val)
           }*/
           handler:localStorageUtil.saveTodos // 和上面一样的意思
         }
      },
      components: {
          todoHeader,
          todoMain,
          todoFooter
      }
  }

</script>

<style>

  /* app */
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>
