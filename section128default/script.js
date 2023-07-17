'use strict';
const createbooking=function(flightnum,bookingnumber=64,price=199){
   //short circuiting  es5
   // bookingnumber=bookingnumber || 64
   // price =price ||177
   const booking={flightnum,
      bookingnumber,
      price
   }
   console.log(booking);   
}
createbooking("lLHb")
