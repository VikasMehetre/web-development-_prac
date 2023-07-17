const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto']
}
const [main, secondary] = restaurant.categories
console.log(main, secondary);
const arr = [4, 5]
const [x, y, z = 1] = arr
console.log(x, y, z);
const arr1 = [1, 4, [8, 3]]
const [p, , q] = arr1
console.log(p, q)
const [i, , [j, k]] = arr1
console.log(i, j, k);
