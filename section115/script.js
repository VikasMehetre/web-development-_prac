const game = {
   team1: 'Bayern Munich',
   team2: 'Borrussia Dortmund',
   players: [
     [
       'Neuer',
       'Pavard',
       'Martinez',
       'Alaba',
       'Davies',
       'Kimmich',
       'Goretzka',
       'Coman',
       'Muller',
       'Gnarby',
       'Lewandowski',
     ],
     [
       'Burki',
       'Schulz',
       'Hummels',
       'Akanji',
       'Hakimi',
       'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
for (const [name] of Object.entries(game.scored)){
   // console.log(`goal score is ${Number(i)+1} by ${name}`);
   
}
let avg=0;
for (const win of Object.values(game.odds)){
  console.log(win)
  avg+=win
  avg/=3
}
console.log(avg);
for (const [team,win] of Object.entries(game.odds)){
   const teamstr=team=== `x` ? `draw` : `victroy ${team}`
   console.log(`odds of ${teamstr}is :${win}`)
}
