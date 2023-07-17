const Person = function(firstName,birthYear) {
   this.firstName = firstName;
   this.birthYear = birthYear;
}

Person.prototype.calAge = function() {
   return new Date().getFullYear() - this.birthYear;
}


const vikas = new Person('Vikas', 2002);
console.log(vikas);
console.log(vikas.calAge());

const Student=function(firstName,birthYear,course){
   Person.call(this,firstName,birthYear)
   this.course=course;
}
// 'never USE THIS'
// Student.prototype.calAge = function() {
//    return new Date().getFullYear() - this.birthYear;
// }
// Student.prototype.intro=function(){
//    console.log(`HI iam ${this.firstName} and i am ${this.calAge()} yers old and i am in ${this.course} course`);
// }
// const  mike=new Student('Mike',1999,'Information Technology')
// console.log(mike);
// console.log(mike.calAge());
// mike.intro();
'should be done before any method added'
Student.prototype=Object.create(Person.prototype);
Student.prototype.intro=function(){
   console.log(`HI iam ${this.firstName} and i am  yers old and i am in ${this.course} course`);
}
const  mike=new Student('Mike',1999,'Information Technology')
console.log(mike);
console.log(mike.calAge());
mike.intro();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
Student.prototype.constructor=Student
console.log(mike.__proto__);
console.log(Student.prototype.constructor);
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

