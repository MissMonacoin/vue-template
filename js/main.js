require("../scss/index.scss")


const Vue = require("vue/dist/vue.runtime.min")
const Vuex = require("vuex")

Vue.use(Vuex)

exports.vm= new Vue({
  el:"#app",
  render(h){
    return h("monappy")
  },
  data(){
    return {}
  },
  components:{
    navigator:require("../component/monappy.js")
  },
  store:require("../js/store.js"),
  beforeMount() {
   
  }
})

if ('serviceWorker' in navigator&&!window.cordova) {
  navigator.serviceWorker.register('./sw.js');
}
