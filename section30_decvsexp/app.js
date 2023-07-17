//function declaration 
//in here we can call the function before declaration 
function age1(by){
    return 2037-by
}
const agee=age1(1991)
//function expression 
const ageee=function(by){
    return 2037 -by
}
const age2=ageee(1991)
console.log(agee,age2)
