// LECTURES
console.log(23==23.0)
console.log(0.1+0.2)
console.log(typeof('23'));
console.log(typeof(+"23"));
console.log(Number.parseInt("34",10));
console.log(Number.parseInt("34",10));
console.log(Number.parseInt("2.5rem",10));
console.log(Number.parseFloat("2.5rem",10));
console.log(Number.isFinite(20));//best method
console.log(Number.isNaN(+"45"))//if value is not an number 
//math and rounding 
console.log("------------------------------------------------")
console.log(25**(1/2));
console.log(Math.sqrt(25))
console.log(Math.max(4,5,3,2,4,3,2,67,76,443))
console.log(Math.PI*Number.parseFloat('10px')**2);
console.log(Math.trunc(Math.random()*6)+1)
console.log(Math.floor(1.51425))
console.log("------------------------------------------------")
console.log("------------------------------------------------")
const MAthrandomint=function(max,min){
  return Math.round((Math.random()*(max-min)+1)+min);
};
console.log(MAthrandomint(8,15));
console.log("------------------------------------------------")
console.log(Math.round(23.3));
console.log((4.5632).toFixed(2));
console.log((4.5632).toFixed(7));
console.log(+(4.5632).toFixed(4));
//Remeinder operator
console.log("Reminder operator ")
console.log(5%2);
// labelBalance.addEventListener('click',function(){
//   [...document.querySelectorAll(".movements__row")].forEach(function(curr,i){
//     if (i%2===0) curr.style.backgroundColor="orangered"
//   })
// })
//numeric seperators 
const diameter=28_746_000_000
console.log(diameter,"ignores the _ value define the the variable ")
//big ints 
console.log(2**53-1);
console.log(4442589632114785236987412558963);
console.log(4442589632114785236987412558963n);
console.log(4442589632114785236987412558963n*100000000000000000000000000000n);
//exceptions 
//console.log(Math.sqrt(4442589632114785236987412558963n));//will give an error
console.log(20n >15);
console.log(20n ===20);
console.log(20n =='20' );
console.log(typeof(20n));
console.log(10n /3n);
console.log(10/3);
const now=new Date()
console.log(now);
// console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2020,5,25,59,25));
console.log(new Date(0));
const future=new Date(2020,5,25,59,25)
console.log("=------------------------------------------------------------------");
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());//day of the week 
console.log(future.getHours());
console.log(future.getTime());
console.log(future.toISOString());
console.log(new Date(159323730000));
console.log(future.setFullYear(2022));


const future2=new Date(2022,4,2,56,87)
console.log("==========================================");
console.log(+future2);
console.log(calcdatedisplay(new Date(2022,4,10),new Date(2022,4,15)));