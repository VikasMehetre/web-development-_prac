const boardpass=function(n,wait){
   const perperson=n/3
   setTimeout(function(){
      console.log(`${n} per group ${perperson}`);
      
   },wait*1000)
   console.log(`wait for ${wait} sec`);
   
}
boardpass(240,10)
/*executes after boardpass */
// setTimeout(function(){
//    console.log(`${n} per group ${perperson}`);
   
// },wait*1000)
// console.log(`wait for ${wait} sec`);