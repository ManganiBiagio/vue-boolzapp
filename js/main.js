import {listChat ,Chat} from "./chatClass.js"
import messageClass from "./messageClass.js"









const { createApp } = Vue;


createApp({
 
  data () {    
    return {
        listChat:listChat,
        utenteAttivo:null
    };
  },
  methods:{
  },
  beforeMount(){
    this.utenteAttivo=listChat[0];

  }
}).mount("#app")

