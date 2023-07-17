function fruitppp(fruit){
    return fruit*4
}
function createjuice(apple,orange){
    const applepeices=fruitppp(apple)
    const orangepeice=fruitppp(orange)
    const juice=`we have ${applepeices} pecies of apple and ${orangepeice} pecies of orange `
    return juice
}
console.log(createjuice(2,3))
