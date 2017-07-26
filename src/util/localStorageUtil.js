/*
 var STORAGE_KEY = 'todos'
 export default {
 fetch () {
 return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
 },
 save (todos) {
 localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
 }
 }
 */


var TODOS_KEY ='todos_key'
export default {
  saveTodos(todos){ // 存储数组对应的json
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
  },
  getTodos(){ //返回数组，如果没有数据，返回[]
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
  }
}
