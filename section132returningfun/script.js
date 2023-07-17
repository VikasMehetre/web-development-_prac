const greet=function(greeting){
   return function vikas(name){
      console.log(`${greeting}, ${name}`);
   }
}
// console.log(greet("ncd"));
const greethey=greet("hey")
console.log(greethey);//become same as vikas funtion
greethey("vivek")
greet("hello")("vinayak")
const greetArr=greeting=>name=>console.log(`${greeting}, ${name}`);
greetArr("hiii")("vikas")


