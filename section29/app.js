'use strict'
const cost=234
let tip
cost<=300 && cost>=50 ? tip=cost*0.15 :tip=cost*0.20
console.log(`Your bill is ${cost+tip} tip is ${tip} cost is ${cost } `)
//stict mode allows us to find the mistake in the code and also reserve words 
//p://127.0.0.1:5500/section29/app.js net::ERR_CONTENT_LENGTH_MISMATCH 200 (OK) allows us find the bug 
'use strict';
let  has_driverlisences=true;
let pass_test=true;
if(pass_test) has_drierlisences==true //using strict mod here we will find the error
if (has_driverlisences) console.log("let him drive")