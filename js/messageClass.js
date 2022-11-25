 export default class Message{
    constructor(date,message,status){
        this.date=date;
        this.message=message;
        this.status=status;
    }

    getHours(){
        const date=this.date.split("");
        const filterdate=date.filter((item,i)=>{
          if(i<11 ||i>15){
            return false
          }else{
            return true
          }
        
  
        })
        return filterdate.join("")
    }
    dateConstruction(now){
        const dateText=`${now.toLocaleDateString("it") } ${now.toLocaleTimeString("it")}`;
        this.date=dateText;
        
        

    }
    
    
   
}