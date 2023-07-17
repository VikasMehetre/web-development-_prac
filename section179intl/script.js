const num=47841569854.254
const option={
   style:'currency',//percent an currency 
   unit:"mile-per-hour",
   currency:"EUR"
}
console.log("india",new Intl.NumberFormat('hi-IN',option).format(num));
console.log("us",new Intl.NumberFormat('en-US',option).format(num));
console.log("GB",new Intl.NumberFormat('en-GB',option).format(num));
console.log("germany ",new Intl.NumberFormat('de-DE',option).format(num));