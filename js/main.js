import chatList from "./chatClass.js"


console.log(chatList);
console.log(chatList[0].lastMessage())





const { createApp } = Vue;


createApp({
 
  data () {    
    return {
        chatList:chatList,
        utenteAttivo:null
    };
  },
  methods:{
  },
  beforeMount(){
    this.utenteAttivo=chatList[0];

  }
}).mount("#app")

