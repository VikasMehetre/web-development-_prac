const poll = {
   question: 'What is your favourite programming language?',
   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
   answers: new Array(4).fill(0),
   registerNewAnswer(){
     const answer=Number(prompt(`${this.question}\n${this.options.join("\n")}`));
     console.log(typeof(answer));
     answer<this.answers.length ? this.answers[answer]=this.answers[answer]+1:alert('wrong input')
     console.log(this.answers);
     displayresult.call(poll,"string")
     
   },  
}
const displayresult=function(type='array'){
   if(type=="array"){
      console.log(this.answers);
      
   }else if(type=='string') {  console.log(`poll results are ${this.answers.join(",")}`);
      
}
}

document.querySelector(".poll").addEventListener("click",poll.registerNewAnswer.bind(poll))

