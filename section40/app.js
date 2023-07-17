 const years =[1456,1664,1680,1358]
 const ages = [];
 const ages1 = [];
 calages=(years)=>2022-years
for(let i=0;i<=years.length-1;i++){
    ages.push(calages(years[i]))
}
console.log(ages)
for(let i=years.length-1;i>=0;i--){
    ages.push(calages(years[i]))
}
console.log(ages)
for (let i=1;i<4;i++){
    for(let j=1;j<=5;j++){
        console.log(`execricse ${i} is till now performed ${j}`)
    }
}
//Later Pratice 
years.forEach(element => {
    ages1.push(element)
});
years.forEach(function(element){
    ages1.push(element)
})
console.log(ages1);
