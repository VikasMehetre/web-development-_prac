'use strict';
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    menu: {
        veg:"yes",nonveg:"yes"
    },
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    orderdelivery: function({starterindex=1,mainindex=0,time='20:00',address}) {
        console.log(`order is at address ${address}, ${time}`);
    },
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
  };
  restaurant.orderdelivery({
    time :'234.4',
    address:'bhhfvb',
    mainIndex:2, 
    starterindex:2,  
})
    // const [main,secondary]=restaurant.categories
    // console.log(main,secondary);
    // const arr=[4,5]
    // const [x,y,z=1]=arr
    // console.log(x,y,z);
    // const arr1=[1,4,[8,3]]
    // const[p,,q]=arr1
    // console.log(p,q)
    // const [i,,[j,k]]=arr1
    // console.log(i,j,k);
    // const {name,openingHours,categories}=restaurant
    //console.log(name,openingHours,categories)
    // const {name:resname,openingHours:hours,categories:tags}=restaurant
    // console.log(resname,hours,tags);

    const {menu=[],starterMenu=[]}=restaurant
    console.log(menu,starterMenu);
    const {fri}=restaurant.openingHours;
    console.log(fri);
    const {fri:{open,close}}=restaurant.openingHours;
    console.log(open,close);

