import userList from "./userList.js";

console.log(userList);


const { createApp } = Vue;


createApp({
 
  data () {    
    return {
        chatList:userList,
    };
  },
  methods:{
    lastmessage(listmessage){
        return listmessage[listmessage.length-1]
    },
    hourLastMessage(listmessage){
      let date=this.lastmessage(listmessage).date;
      // return date.splice(11,4)
      date=date.split("");
      const filterdate=date.filter((item,i)=>{
        if(i<11 ||i>15){
          return false
        }else{
          return true
        }
      

      })
      return filterdate.join("")

    }
   

  }
}).mount("#app")

