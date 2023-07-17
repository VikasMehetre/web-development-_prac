const flight="LH789"
const Vikas={
   "name":"Vikas Meherte",
   passportnumber:5151516578952
   }
const booking=function(flightnumber ,passport){
   flightnumber="LH999"
   passport.name="Mr."+passport.name
   passport.passportnumber==5151516578952 ?alert("check in"):alert("Dont check in")

}
// booking(flight,Vikas)
console.log(Vikas);//will change
console.log(flight);//will not 
const flightnumber=flight//copys the value of the flight number//value is simply copied 
const passport=Vikas//copys the refernce //memory address  is copied 
const newpass=function(person){
   person.passportnumber=Math.random()*100000000
}
newpass(Vikas)
booking(flight,Vikas)//dont manipulate same object using two function 