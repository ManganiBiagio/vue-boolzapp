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
      const usersActive=this.utenteAttivo;
      this.newMsg.dateConstruction(new Date());
      
      usersActive.messages.push(this.newMsg);
      setTimeout(()=>{
        usersActive.autoResponder();

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
    // onMessageInfoDrop(){
    //   this.visibilityInfo=true;
     
    // }
    
    
  },
  beforeMount(){
    this.utenteAttivo=listChat[0];

  },
  mounted(){
    window.addEventListener("click",(e)=> {
      if(e.target.closest(".msg-info")!==null){
        if((e.target.closest(".msg-info").classList.value==="msg-info" )){
       
          if(this.visibilityInfo===false){
            this.visibilityInfo=true;
          }
          else {
            this.visibilityInfo=false;
          }
        
       
      }
     
      

      }
      else if(e.target!=="msg-info"){
        this.visibilityInfo=false;
      }
      
      

    })
  }
}).mount("#app")

"".startsWith