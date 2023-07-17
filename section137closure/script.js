const securebooking=function(){
   let passcount=0
   return function number(){
      passcount++;
      console.log(`passaranger count is ${passcount}`);
      
   }
}
const booker=securebooking()//closure helps us to remeber the variable enivornment at the place where function was ceated 
for (let i=0;i<6;i++){
   booker()
}