let calculateAverage=(score1,score2,score3)=>{
    return (score1+score2+score3)/3
}
let Avgkolas=calculateAverage(55,45,34)
console.log(Avgkolas)
let AvgDolphins=calculateAverage(45,3,3)
console.log(AvgDolphins)
function Checkwinner(AvgDolphins,Avgkolas){
    if(Avgkolas>2*AvgDolphins){
        return `kolas won`
    }
    else if(AvgDolphins>2*Avgkolas){
        return `dolphins won`
    }
    else{
        return `tie`
    }

}
let winner=Checkwinner(Avgkolas,AvgDolphins)
console.log(winner)
