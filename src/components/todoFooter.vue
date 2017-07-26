<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckdAll"/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" @click="removeCompleted" v-show="completeSize">清除已完成任务</button>
    <!--<button class="btn btn-danger" @click="removeCompleted" v-show="completeSize.length > 0">清除已完成任务</button>  也可以实现-->
  </div>
</template>

<script>
 export default{
     props: {
         todos:Array,
        removeCompleted:Function,
        selectAllTodos:Function

     },
     computed:{
          completeSize(){

            /*let totalSize=0
            for(let i=0;i<todos.length;i++){
              let todo=this.todos[i]
              if(todo.complete){
                totalSize ++
              }
            }
            return totalSize*/

            return this.todos.reduce((preTotal,todo)=>{
                //reduce 返回的是最后一次遍历执行回调函数return 的结果
                 return preTotal += todo.complete ? 1 : 0
            },0)

          },
          isCheckdAll:{
             get(){
               return  this.completeSize===this.todos.length && this.todos.length>0
             },
              set(value){//  监视当前value的改变 当用户通过操作的方式改变了勾选的状态
                //更新todos
                this.selectAllTodos(value)

              }
          }
     }
 }
</script>

<style>
  /* footer */
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
