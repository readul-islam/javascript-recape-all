const cheackBtn = () =>{
   let inputFlied = document.getElementById('inputFlied');
   
  
   try{
    const inputValue = inputFlied.value;
       if(inputValue < 5){
           throw "input value is low";
       }
       else if (inputValue > 10){
          throw "input value is high" ;
       }

   }catch(err){
    console.log(err);
   }
   
   inputFlied.value ='';
}