setTimeout(function(){
   console.log('Hello World') 
},1000)
console.log("hello my pathetic subjects ");
// setTimeout(function(in1,in2){
//    console.log(`here is your pizza with ${in1},${in2}`);
// },3000,"oliver","spinach")
console.log("waiting");
const ingredients=["oliver","spinach"]
const timer=setTimeout(function(in1,in2){
   console.log(`here is your pizza with ${in1},${in2}`);
},3000,...ingredients)
if(ingredients.includes("spinach")) clearTimeout(timer)
setInterval(function(){
   const now=new Date()
   console.log(new Intl.DateTimeFormat('en-GB',{
      hours:'numeric',
      day:"numeric",
      minute:"numeric",
      weakday:"long"
   }).format(now))
},1000)