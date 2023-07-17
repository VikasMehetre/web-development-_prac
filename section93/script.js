const myname='Vikas'
if(myname==='Vikas'){
    console.log(`my name is ${myname} and job is `);//an tdz occur temperol dead zone 
    const job="teacher "
}
//variables declare with var will createan property on global window object 
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}
var myVar = 100;

      function printMe() {

        this.myVar = 200;

        this.display = function () {

          var myVar = 300;

          console.log("myVar = " + myVar); // 300

          console.log("this.myVar = " + this.myVar); // 200

        };

      }

      var obj = new printMe();

      obj.display();