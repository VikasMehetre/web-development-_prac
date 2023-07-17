const eruo=[200, 450, 400, 3000, 650, 130, 70, 1300].map(function(mov){
   return Number(mov*1.1)});
console.log(eruo);
//map elemenst return an new array
const euroarr=[200, 450, -400, 3000, -650, -130, 70, 1300].map(mov=> mov*1.1)
console.log(euroarr);
//parametres similar to for each
const movements=[200, 450, -400, 3000, -650, -130, 70, 1300]
const description=movements.map((mov,i,arr)=>{//similar to previous for each elemnt 
   return `movement ${i+1} is ${mov>0 ?'debited':'withdrawal'} of ${Math.abs(mov)} `
});
console.log(description);
const post=movements.filter(function(elemnt){
   return elemnt>0 
})
console.log(post);

   