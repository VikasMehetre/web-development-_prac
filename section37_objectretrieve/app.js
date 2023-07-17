const vikas={
    firstname:"vikas",
    age:"20",
    lastname:"mehetre",
    freinds:['vivek',"vinayak"]


}
console.log(vikas)
//difference between dot and brack notation 
//we can pass an expression as an input to retrieve the data
console.log(vikas.age)
const namekey='name'
console.log(vikas['first'+namekey])
console.log(`${vikas.firstname} has ${vikas.freinds.length} and his best freinds is ${vikas.freinds[0]}`)