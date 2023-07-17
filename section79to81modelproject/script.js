'use strict';
const model=document.querySelector('.modal')
console.log(model);
const overlay=document.querySelector('.overlay')
const btnclosemodel=document.querySelector('.close-modal')
const btnopenmodel=document.querySelectorAll('.show-modal')//query selector only selects only the first so we use query selector all
console.log(btnopenmodel);

//btnopenmodel creta an node list just as an aarrey
const openbtn=function(){
    model.classList.remove('hidden')//dont use .hidden cause we are definig it as an class already in class list
    overlay.classList.remove('hidden')
}
const closbtn=function(){
    model.classList.add('hidden')
    overlay.classList.add('hidden')
}
for (let i=0;i<btnopenmodel.length;i++)
btnopenmodel[i].addEventListener('click',openbtn);
btnclosemodel.addEventListener("click",closbtn)
overlay.addEventListener('click',closbtn)
//keyboard events are global events  wesave them directly in document
document.addEventListener('keydown',function(e){
    console.log(e)
    console.log(e.key);
    if(e.key==='Escape' && !model.classList.contains('hidden')){
        closbtn();//here we will call the function because somethng needs to happen
}})
