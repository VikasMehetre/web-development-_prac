const arr=[
1,2,3,4,5,6,7,8,9,0,2,3,56,]
console.log(arr.slice(2,7));
console.log(arr.slice());
console.log(arr);
//spice mutuate the arr 
arr.splice(4)
console.log(arr);
const arr1=['a','b','c','d','e']
//reverse the string also mutuate the arr
console.log(arr1.reverse());
console.log(arr1);
const  ar=arr.concat(arr1)
console.log(ar);
console.log(arr1.join('-'));//returns an string
/*athe new at method */
console.log(arr[0]);
console.log(arr.at(0));
//last element 
console.log(arr[arr.length-1]);
console.log(arr.slice(-1)[0]);
console.log(typeof(arr.slice(-1)[0]));

console.log(arr.at(-1));






