const text="underscore_case \n first_name \n Some_Variable \n calculate_AGE \n delayed_departure"
const rows=text.split("\n")
console.log(rows);
for (const [i,row] of rows.entries()){
   const [first,second]=row.trim().toLowerCase().split("_")
   // console.log(first,second);
   const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
   //  console.log(output);
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    
    
}
