const orderset=new Set([
   "vikas",
   "vinayak",
   "Vivek",
   "vikas"   
]);
console.log(orderset);
console.log(orderset.has('vikas'));
console.log(orderset.add('apurva'));
console.log(orderset.size);
for (let i of orderset){
   console.log(i);
};
const staff=[
   'chef',
   'waiter',
   'chef',
   'manager'
];
console.log(staff);

const staffU=new Set(staff)
console.log(staffU);
 const staffUarr=[...new Set(staff)]
 console.log(staffUarr);
 

