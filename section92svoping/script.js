const myname='viaks';
function first(){
    const age=52
    if(age>=30){
        const decade=3//var is not block scoped thus mell can be used in second gunction
        var mell=true
    }
    function second(){
        const job ='student'
        console.log(`my name is ${myname} and age is ${age} and i am an ${job} in ${mell}`);//here age can be used due to variable lookup
    }if(mell){
    second();}//canot do the variable lookdown 
}
first(); //here mell cannot be used due to function scope of it 