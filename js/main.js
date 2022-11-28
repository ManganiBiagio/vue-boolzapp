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
    // onMessageInfoDrop(){
    //   this.visibilityInfo=true;
     
    // }
    
    
  },
  beforeMount(){
    this.utenteAttivo=listChat[0];

  },
  mounted(){
    window.addEventListener("click",(e)=> {
      if((e.target.classList.value==="msg-info" )){
       
          if(this.visibilityInfo===false){
            this.visibilityInfo=true;
          }
          else {
            this.visibilityInfo=false;
          }
        
       
      }
      else if(e.target.classList.value!=="msg-info"){
        this.visibilityInfo=false;
      }
      
      

    })
  }
}).mount("#app")

"".startsWith