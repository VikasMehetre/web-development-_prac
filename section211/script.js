const Person = function (firstName, birthYear) {
   //instance propeties
   this.firstName = firstName;
   this.birthYear = birthYear
   "NEVER DO THIS"
   // this.calAge = function () {
   //    console.log(2022 - Number(this.birthYear));
   // }
}
const vikas = new Person('vikas', 2002)//here new keyword is important 
console.log(vikas);
//new {} is created '''empty object is created  
//function is called ,this={}
//{} link to the prototype
//function automatically return 
const vivek = new Person('vivek', 2000)
const vinayak = new Person('vinayak', 2008)
console.log(vinayak, vivek);
console.log(vikas instanceof Person);
// console.log(new Date);
console.log(Person.prototype);//here prototype.person is not the prototype of the person but it is the prototype of the objects being used 
Person.prototype.calage=function(){
         console.log(2022 - Number(this.birthYear));
}
vikas.calage();
console.log(vikas.__proto__);
console.log(vikas.__proto__===Person.prototype);
console.log(Person.prototype.isPrototypeOf(vikas));
console.log(Person.prototype.isPrototypeOf(vivek));
console.log(Person.prototype.isPrototypeOf(Person));
//Prototype of linked object
Person.prototype.spieces='homo'
console.log(vikas.spieces);
console.log(vikas.__proto__);
console.log(vikas.__proto__.__proto__);
console.log(vikas.__proto__.__proto__.__proto__);
console.log(Person.prototype.constructor);
const arr=[1,2,3,4,4,5,6,7,6,5,3,2,3,4,5,5,6,7]
console.log(arr.__proto__);
console.log(arr.__proto__==Array.prototype);
console.log(arr.__proto__.__proto__);
//Creating an new array method
'not an good idea'
Array.prototype.unique=function(){
   return [...new Set(this)]
}
console.log(arr.unique());
const h1=document.querySelector('h1')
console.log(h1);
console.dir(x=>x+1)