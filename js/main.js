import {listChat ,Chat} from "./chatClass.js"
import Message from "./messageClass.js";
import messageClass from "./messageClass.js"









const { createApp } = Vue;


createApp({
 
  data () {    
    return {
        listChat:listChat,
        utenteAttivo:null,
        newMsg:new Message(null,null,"sent"),
        nameSearchedChat:"",
        filteredList:listChat,
        visibilityInfo:false,
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
    },
    filterList(){
      const filterList=this.listChat.filter((chat=>{
        if(chat.name.toLowerCase().includes(this.nameSearchedChat)){
          return true
        }
        else{
          return false
        }
      }))
      this.filteredList=filterList; 
    },
    onMessageInfoDrop(){
      this.visibilityInfo=true;
      setTimeout(()=>{
        this.visibilityInfo=false;
      },2000)
    }
    
    
  },
  beforeMount(){
    this.utenteAttivo=listChat[0];

  }
}).mount("#app")

"".startsWith