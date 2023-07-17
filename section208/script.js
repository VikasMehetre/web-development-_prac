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
console.log(new Date);