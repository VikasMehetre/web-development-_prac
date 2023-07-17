/*bind key word binds the this keyword and create an new function*/
const lithuania={
   airline:"Lithuania",
   iatacode:"LH",
   booking:[],
   //boook :funtion(){}
   book(flightnum,name){
      console.log(`name is ${name} in airline ${this.airline} ans the seat number is ${this.iatacode}${flightnum}`);
      this.booking.push({flightnumber:` ${this.iatacode}${flightnum}`,name})
      
   }
}
lithuania.book(145,"vikas")
const euroways={
   airline:"euroways",
   iatacode:"EW",
   booking:[],
   
}
console.log(lithuania.booking);

const book=lithuania.book
const bookew=book.bind(euroways)
// console.log(bookew);
bookew(773,"nivrutti mehetre ")
const ew23=book.bind(euroways,23)//also knowas partial binding or partial application
ew23("mehetre")//predefinr the seatnumber 
// notes this keyword is set to the elemnt to which event hanlder is atached 
lithuania.planes=300;
lithuania.buyplane=function(){
   console.log(this);
   this.planes++;
   console.log(this.planes);
   console.log(this);
}

// document.querySelector(".buy").addEventListener("click",lithuania.buyplane)
/* here this key word points to buy button element */
document.querySelector(".buy").addEventListener("click",lithuania.buyplane.bind(lithuania))
//we will use the bind as we dont call the function here
/*const addtax=(rate,value)=> value=value*rate
console.log(addtax(0.1,800));
const addtaxval=addtax.bind(null,0.23)
console.log(addtaxval(800));*/
const addtax=function(rate){
   return function calculate(value){
      return value=value*rate
   }
}
const addtaxval=addtax(0.23)
console.log(addtaxval(800));


