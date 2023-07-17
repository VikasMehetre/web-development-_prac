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
book.call(euroways,23,"vinayak garudi")
book.apply(euroways,[456,"mangal Mehetre"])//instead it takes the array as an set of arguments
const flightdata=[563,"nnnn mehetre"]
book.apply(euroways,flightdata)