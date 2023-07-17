const  PersonProto={
   calAge(){
      console.log(2022-this.birthYear);
   },
   init(firstname,birthYear){
      this.firstName = firstname;
      this.birthYear = birthYear
   }
}
const steven=Object.create(PersonProto);
console.log(steven);
steven.name='Steven';
steven.birthYear=2002
steven.calAge()
console.log(steven.__proto__===PersonProto);
const Sarah=Object.create(PersonProto);
Sarah.init('Sarah',1987)
Sarah.calAge()