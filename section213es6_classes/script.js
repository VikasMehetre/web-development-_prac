class Person{
   constructor(firstname,birthYear){
      this.firstname=firstname
      this.birthYear=birthYear
   }
   //all the function return outside  constructor will be on the prtotype not on the object itself
   calAge(){
      console.log(2037-this.birthYear);
   }
}
const vikas=new Person('vikas',1990)
console.log(vikas);
vikas.calAge()
console.log(vikas.__proto__===Person.prototype);
Person.prototype.greet=function(){
   console.log(`${this.firstname} hello`);
}
vikas.greet()
//classes are not hoisted 
//clases are executed in srtict mode
//class are first class citizen 