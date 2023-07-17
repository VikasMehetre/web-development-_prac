'use strict'
let dice=Math.trunc(Math.random()*6)+1;
// while(dice!==6){
//     let dice=Math.trunc(Math.random()*6)+1;
//     console.log(dice)
// }
const x=4;
if(x==4) console.log("good")
//section 5
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
let current_max,current_min;
// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
const caltempal=function(arr){
    current_max=0
    current_min=arr[1]
    arr.forEach(function(element){
        if(typeof(element)!=Number){
                }
        if(element>current_max){
            current_max=element
        }
        if(element<current_min){
            current_min=element
        }
    })
    return current_max-current_min
}
console.log(caltempal(temperatures));