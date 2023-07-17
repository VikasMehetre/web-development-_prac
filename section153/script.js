const  movements=[200, 450, -400, 3000, -650, -130, 70, 10300];
// return >0 B,A(switch order)
//return <0 A,B(dont switch the order)
console.log(movements.sort(function(a,b){
   if(a>b) return 1
   if(a<b) return -1
}));
console.log(movements.sort((a,b)=>a-b));


// const global_balance=movements.reduce(function(acc,curr,i,arr){
//    return acc+curr
// },0/*initial value of the acccumulater  */)
// //first keywordis always accumulator it is likeasnowball
// console.log(global_balance);
// const max=movements.reduce(function(acc,curr){
//    return acc<curr ?acc=curr: acc
// },movements[0])
// console.log(max);
// const human=function (ages){
//   const humanages= ages.map(age=>age<=2 ?age *2:16 +age*4)
 
//   const account1 = {
//    owner: 'Jonas Schmedtmann',
//    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//    interestRate: 1.2, // %
//    pin: 1111,
//  };
 
//  const account2 = {
//    owner: 'Jessica Davis',
//    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//    interestRate: 1.5,
//    pin: 2222,
//  };
 
 
//  const account3 = {
//    owner: 'Steven Thomas Williams',
//    movements: [200, -200, 340, -300, -20, 50, 400, -460],
//    interestRate: 0.7,
//    pin: 3333,
//  };
 
//  const account4 = {
//    owner: 'Sarah Smith',
//    movements: [430, 1000, 700, 50, 90],
//    interestRate: 1,
//    pin:4444,
// } ;
//   const excluded= humanages.filter(function(age,i){
//    return age>18
   
//   })
//   const avg=humanages.reduce(function(acc,crr,ages){
//    acc=acc+crr
//    return acc/humanages.length})
// }
// const calage=ages=>{
//    return ages.map(age=>age<=2?age*2:16+age*4)
//    .filter(function(age,i){
//    return age>18
//   }).reduce(function(acc,crr,i,age){
//    avg=acc+crr/age.length
//    return avg},0)
//   }
// const total=movements.filter(function(mov){
//    return mov>0
// }).map(function(mov){
//    return mov*1.1
// }).reduce(function(acc,mov){
//    return mov +acc
// })
// console.log(`toatal in usd is ${total}`);
// console.log(calage([4,8,6,3,7,9,1,6]))
// /** find method  */
// console.log(movements.find(mov=>mov>0));
// for (const i of movements){
//    if(i>0){
//       console.log(i)
//       break
//    }

// }
// console.log(movements.includes(-130));
// console.log(movements.some(mov=>mov>500))
// //every will return true if every element returns true 
// const deposits=(mov)=>mov >0
// console.log('   \n\n\n\n\n\n\n\n\n\n\n');

// console.log(account4.movements.some(deposits));
// console.log(account4.movements.every(deposits));
// console.log(account4.movements.filter(deposits));
// const arr=[4,4,1,[45,4.5,1.4,1.4,1],252.5,4,4,5,4,5,41,5,5,8,,4]
// console.log(arr.flat());
// const arrDEpp=[[[1,2],3,4],5,6,[[7,8],9],10]
// console.log(arrDEpp.flat());
// console.log(arrDEpp.flat(2));
// const accounts=[account1,account2,account3,account4]


