console.log('vikas+mehetre+hbdc'.split('+'));
// const name1="Vikas mehetre"
const changename = function (name1) {
   const namearr = name1.split(" ")
   const nameu = []
   for (let n of namearr) {
      // console.log(n);
      nameu.push(n.replace(n[0], n[0].toUpperCase()))
   }
   // console.log(nameu);
   const correctname = nameu.join(' ')
   console.log(correctname);
}
changename("vikas mehetre and family    ".trim())
console.log("vikas".padStart(23, "+"));//makes the length 23overall
console.log("welcome to myhome".padStart(23, "+"));
const cred = function (number) {
   const str = number + ""
   const last = str.slice(-4);
   console.log(last.padStart(str.length, "*"));

}
cred(1128794567)