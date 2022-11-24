import chatList from "./chatClass.js"


console.log(chatList);
console.log(chatList[0].lastMessage())





const { createApp } = Vue;


createApp({
 
  data () {    
    return {
        chatList:chatList,
    };
  },
  methods:{
  }
}).mount("#app")

