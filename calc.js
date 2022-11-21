var screen = document.getElementById('screen');

 function btnclick(value){
  screen.value += value ;  
    
 }
 function clearScreen(){
 screen.value = "" ;
 }

 function getResult(){
 var result = eval(screen.value)
 screen.value = result ;
 }