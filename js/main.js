import {listChat ,Chat} from "./chatClass.js"
import Message from "./messageClass.js";
import messageClass from "./messageClass.js"









const { createApp } = Vue;


createApp({
 
  data () {    
    return {
        listChat:listChat,
        utenteAttivo:null,
        newMsg:new Message(null,null,"sent")
    };
  },
  methods:{
    sendNewMsg(){
      
      this.newMsg.dateConstruction(new Date());
      
      this.utenteAttivo.messages.push(this.newMsg);
      setTimeout(()=>{
        this.utenteAttivo.autoResponder();

      },1000)
      this.newMsg=new Message(null,null,"sent");
      
      
      
    }
  },
  beforeMount(){
    this.utenteAttivo=listChat[0];

  }
}).mount("#app")

