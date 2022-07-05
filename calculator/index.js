 let screen= document.getElementById('screen');
let buttons = document.querySelectorAll("button");
let screenValue="";
for(item of buttons){
item.addEventListener('click',(e)=>{    
    buttonText = e.target.innerText;
    console.log("button's text is" + buttonText );

// if CE then empty the screen
 if(buttonText=='CE'){
  screenValue="";
screen.value=screenValue;
}
else if(buttonText=='C')
{
   let nowText=screenValue;
screenValue=nowText.slice(0, -1);
screen.value=screenValue;
}
else if(buttonText=='='){
screen.value=eval(screenValue); //eval is fxn in js to evaluate say screenValue
}
else if(buttonText=="1/x"){
  screen.value=1/screen.value;
}
else{
  screenValue+=buttonText;
  screen.value = screenValue; 
}
});
}
