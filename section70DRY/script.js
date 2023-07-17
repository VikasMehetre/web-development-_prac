'use strict';
//dom is an connection pont betweenhtml ,css and javascript
// console.log(document.querySelector(".message").textContent);
// document.querySelector('.message').textContent='vikas'
// let value1=document.querySelector('.guess').value
// console.log(value1)
let highScore=Number(document.querySelector('.highscore').textContent)

//let highScore=Number(document.querySelector('.highscore').textContent)
let secretNumber=Math.trunc(Math.random()*20+1)
let currentScore=Number(document.querySelector('.score').textContent)
document.querySelector('.check').addEventListener('click',function(){
    let value1=Number(document.querySelector('.guess').value)//here the data retrieved will be an string so we need to typecast
    console.log(value1)
    if(!value1){//basically means there is no guess we have clicked guess wtihout any input values 
         document.querySelector('.message').textContent='no number'
        }else if(value1==secretNumber){
            document.querySelector('.message').textContent='good'
            document.querySelector('body').style.backgroundColor='#60b347'//always in camalcase
            document.querySelector('.number').style.width='30rem'
            document.querySelector('.number').textContent=value1
            if(currentScore>highScore){
                document.querySelector('.highscore').textContent=currentScore
            } 
        }else if(value1!==secretNumber){
            if(currentScore>1)
            {document.querySelector('.message').textContent= value1>secretNumber?'too high':'too low'// we used ternary operatr
            currentScore--;
            document.querySelector('.score').textContent=currentScore}
            else{
                document.querySelector('.message').textContent='game lost'
    
            }
        }
    //     else if(value1>secretNumber){
    //         if(currentScore>1)
    //     {document.querySelector('.message').textContent='too high'
    //     currentScore--;
    //     document.querySelector('.score').textContent=currentScore}
    //     else{
    //         document.querySelector('.message').textContent='game lost'

    //     }
    //     }else if(value1<secretNumber){
    //         if(currentScore>1)
    //         {document.querySelector('.message').textContent='too low '
    //         currentScore--;
    //         document.querySelector('.score').textContent=currentScore
    //     }else{
    //         document.querySelector('.message').textContent='game lost'
    //     }
    // }

})
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.number').style.width='15rem'
    document.querySelector('.score').textContent=20
    document.querySelector('.message').textContent='start Guessing'
    document.querySelector('body').style.backgroundColor='#000000'
    document.querySelector
    secretNumber=Math.trunc(Math.random()*20+1)
    highScore=Number(document.querySelector('.highscore').textContent)
    document.querySelector('.guess').value=""
    
})
