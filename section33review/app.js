function calage(birthyear){
    return 2023-birthyear
}
function retire(birthyear,firstname){
    const age=calage(birthyear)
    let retireage=65-age
    if (retireage>0){
        return `my name is ${firstname} and ihave left ${retireage}`
    }else{
        return -1
    }
}
console.log(retire(1981,"vikas"))