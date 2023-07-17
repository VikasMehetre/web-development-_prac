'use strict';
const openingHours ={
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    menu: {
        veg:"yes",nonveg:"yes"
    },
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    orderdelivery({starterindex=1,mainindex=0,time='20:00',address}) {
        console.log(`order is at address ${address}, ${time}`);
    },
    orderpasta: function(in1, in2, in3) {
      console.log(`pasta has ${in1}, ${in2}, ${in3}`);
    },    
     orderpizza:function(mainin,...special){
      console.log(`we have ${mainin} and other in as ${special}`);
      

     },
     //enhaced 
     openingHours,
  
    
  };
const arr=[2,6,43,4]
const badway=[1,4,arr[0],arr[1]]
// console.log(badway);
const newArr=[1,2,...arr]
// console.log(newArr);
// console.log(...newArr);
const newarr2=[...newArr,'viks ']
const menu=[...restaurant.mainMenu,...restaurant.starterMenu]
// console.log(menu);
//iterables arearr,str,maps,sets but not object 
//.... does work in in ``
// const ingre=[prompt("in 1"),prompt("2"),prompt("3")]
// restaurant.orderpasta(...ingre)
const rescopy={...restaurant}
rescopy.name='vikas'
// console.log(rescopy.name);
// console.log(restaurant.name);
//spread because on the right side 
const arr1=[1,2,...[3,57,3,3]]
//REST because on left side of= should always be last and can be only one 
const [a,b,...other]=[3,4,5,3,2,4,5,2]
// console.log(a,b,other);
const {sat,...week}={...restaurant.openingHours}
// console.log(week);
const add=(...num)=>{
  let sum=0;
  for(let i=0;i<num.length;i++){
    sum+=num[i];
  }
  return sum
}
// console.log(add(4,6,65,4,4,4,4));
// restaurant.orderpizza('nnnc',"crrcr","Vrvrvcdd")
//short circuiting 
// console.log(undefined || 0 ||''||'hello'||23||null);
// console.log(undefined || 23 ||''||'hello'||0||null);
// //when we  use or we will get the first truthy value only and the remainig gest shortciruted and operator takses 
// console.log(0&&4);
// console.log(4 && 'jonas');
// nullish cohelesing operator 

restaurant.numguest=0
const guest=restaurant.numguest ||10//it takes 0 as falsy value 
// console.log(guest);
const guestcc=restaurant.numguest ?? 10//nullish operator
// console.log(guestcc);
/*
logical Assignment operator 
*/
const rest1={
  name:'capri',
  numguest:20
}
const rest2={
  name:'la Piaxzza',
  owner:'giovanni Rossi '
}
// rest1.numguest=rest1.numguest||10;
rest2.numguest=rest2.numguest||10
rest1.numguest||=10

// console.log(rest1);
// console.log(rest2);
//for of loop
// const menuf=[...restaurant.starterMenu,...restaurant.mainMenu]
// for( const items of menuf) console.log(items );
// for( const items of menuf.entries()) console.log(items);
// for( const item of menuf.entries()) console.log(`${item[0]+1}:${item[1]}`);
// for (const [i,el] of menuf.entries() ){
//   console.log(`${i+1}:${el}`);
// }
/*enhaced object literal 
*/
// console.log(restaurant.openingHours.mon?.open)
const days=['mon','tue','wed','thu','fri','sat','sun']
// for(const day of days ){
//   // console.log(day);
//    console.log(restaurant.openingHours[day]?.open ??'closed' );
  
  
// }
/*methods 
 */
// console.log(restaurant.orderpasta("0", "1", "3") ?? 'method doesn\'t exist');
/* 114  looping objects  */
const prop=Object.keys(openingHours)
console.log('keys are ',prop);
for (const day of prop){
  console.log(day)
} 
const val=Object.values(openingHours.thu)
// console.log(val)
//enteries 
const en=Object.entries(openingHours)
// console.log(en);
for(const x of en){
  console.log(x[0] ,x[1]);
  
}
for(const [key,{open,close}] of en){
  // console.log(`on ${key} clodse at ${close},${open}`);
  
}



