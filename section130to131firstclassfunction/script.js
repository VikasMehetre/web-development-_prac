const oneword=function(str){
   return str.replace(/ /g,"")
   
}
const upperfirstword=function(str){
   const [first,...others]=str.split(" ")
   // return [first.toUpperCase(),...others].join(" ")
   return[first.replace(first[0],first[0].toUpperCase()),...others].join(" ")
}
const transformer=function(str,fn){
   console.log(str);
   console.log(fn(str));
   console.log(fn.name);
   
   
   
}
const secondupper=function(str){
   const [first,second]=str.split(' ')
   return[first,second.replace(second[0],second[0].toUpperCase())].join(" ")
}
const abd=()=>{
   console.log("youbought something");
   alert("you bought something ")
   
}

transformer('hello world',upperfirstword)
transformer('hello world',secondupper)
// console.log('hello world  vikas'.replace(/ /g,""))
"/ / detemines single space in given string "
