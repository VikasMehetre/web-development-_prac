const now =new Date()
const option={
   hour: 'numeric',
   minute:"numeric",
   day:'numeric',
   month:'long',
   year:'numeric',
   weekday:'long'
}
//here hi-IN is locale means language 
const international=new Intl.DateTimeFormat('hi-IN',option).format(now)
console.log(international);
//we can take local dynamically
const nav=navigator.language
console.log(nav);
const international1=new Intl.DateTimeFormat(nav,option).format(now)
console.log(international1);