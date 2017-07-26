import Vue from 'vue'
import app from './components/app'
import './index.css'

/* eslint-disable no-new */
/* new Vue({
  el: '#app',
  render: h => h(App)
}) */

new Vue({
  el:"#app",
  render: h => h(app)
})
