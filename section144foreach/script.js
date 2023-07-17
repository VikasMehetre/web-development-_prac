
const  movements=[200,500,565,14,-548,-541,-300,600]
for(let movement of movements){
   if(movement>0){
      console.log(`amount debitesd${movement}`);
      
   }else{
      console.log(`amount credited ${Math.abs(movement)}`);
      
   }
}
movements.forEach(function(movement,index,array){//patern always same because of the parametes 
   if(movement>0){
      console.log(` Movement ${index+1}:amount debitesd${movement}`);
      
   }else{
      console.log(` Movement ${index+1}:amount credited ${Math.abs(movement)}`);
      
   }
});//for each doesttn have break and countinue 
console.log("\n\n\n for maps and sets ");
const currr=new Map([
   ['usd',"united states"],
   ["inr","india"],
   ['euro',"european union"]]
);
console.log(currr);

currr.forEach(function(value,key,map){
   console.log(`value is ${value},key is ${key}`);
   
})
