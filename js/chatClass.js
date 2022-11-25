import userList from "./userList.js";
import Message  from "./messageClass.js";

  class Chat{
    constructor(name,avatar,visible,messages){
        this.name=name;
        this.avatar=avatar;
        this.visible=visible;
        this.messages=messages;

    }
    toString(){
        return `chat di ${this.name}`
    }
    lastMessage(){
        return this.messages[this.messages.length-1]
    }
   
    }


const listChat=[];
userList.forEach((item)=>{
    //creo delle istanza Di Message all'interno dell'array item.message
    const messagesList=[];
    item.messages.forEach((element)=>{
        const message=new Message(element.date,element.message,element.status);
        messagesList.push(message);
    })
    // Creo un istanza di chat per ogni elemento della lista 
    const chat=new Chat(item.name,item.avatar,item.visible,messagesList);
    listChat.push(chat);
})

export  {listChat,Chat};