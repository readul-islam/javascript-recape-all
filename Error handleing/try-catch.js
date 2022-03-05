// try , catch, finally

// alert('Hello');
// alert(x);  //this code give an error
// alert('Bye');

try{
                                //here all  code execute 
                                //and find error
   alert('hello') 
   alert(x)
   alert('bye') 

}catch(err){

                             //handle error block ...
                            //catch only runtime error
                            //don't  catch syntaxError
   console.log(err);  
   console.log(err.massage);
   console.log(err.name);
}finally{

    //this block code executed  with erroe without error};
    
    alert(`I'm running all time without error and with error`)
}
    
                
