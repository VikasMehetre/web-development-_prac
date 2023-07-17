const account = {
   owner: "vikas",
   movements: [50, 200, 450, 250, 100],
   get latest() {
      return this.movements.slice(-1).pop()
   },
set latest(value) {
   this.movements.push(value)
}
}
account.latest
console.log(account.latest);
account.latest=50
console.log(account.movements);
class Person{
   constructor(fullname,birthyear){
      this.fullname=fullname
      this.birthyear=birthyear
   }
   set fullname(name){
      // if(name.includes(' ')){ this.fullname=name}'''cretes an errroe 
      if(name.includes(' ')){ this._fullname=name}
      else{
         alert('enter the full name with space')
      }
   }
   get fullname(){
      return this._fullname
   }
   
}
const vikas=new Person('Vikas Mehetre',1997)
