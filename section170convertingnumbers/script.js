'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];
let tt;
/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions
const timer=function(){
  let time=10
  const ticktick=function(){
    let min=String(Math.floor(time /60)).padStart(2,0)
    let sec=String(time %60).padStart(2,0)
    labelTimer.textContent=`${min}:${sec}`
    time--;
    if(time===0){
      clearInterval(tt);
      containerApp.style.opacity = 0;
    }
  }
  //consider it as 100 seconds 
  //call the timer evry second
  ticktick()
   tt =setInterval(ticktick,1000)
  return tt
}
const formatteddates=function(dates,locale){
  const calcdatedisplay=(date1,date2)=>{
    return Math.floor(Math.trunc(date1-date2)/(1000*60*60*24))
  }
  const dayspassed=calcdatedisplay(new Date(),dates)
  console.log(dayspassed);
  if(dayspassed==0 )return 'Today'
  if(dayspassed==1 )return 'yesterdat'
  if(dayspassed<7)return `${dayspassed} days ago`
  else{
//   const day=`${dates.getDate()}`.padStart(2,"0")
//   const month=`${dates.getMonth()+1}`.padStart(2,"0")
//   const year=dates.getFullYear()
//  return ` ${day}/${month}/${year}`
return new Intl.DateTimeFormat(locale).format(dates)
}
}

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const dates =new Date(acc.movementsDates[i])
    console.log(dates)
   
    const  displayDate=formatteddates(dates,acc.locale)
    const formmattedmovs=new Intl.NumberFormat(acc.locale,{
      style:'currency',
      currency:acc.currency
    }).format(mov)
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
              <div class="movements__date">${displayDate}</div>

        <div class="movements__value">${(formmattedmovs)}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};


const calcDisplaySummary = function (acc) {
  
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;
//fake logging


btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    // containerApp.style.opacity = 100;
    // display date and time
containerApp.style.opacity = 100;
const now=new Date()
const options={
  hour: 'numeric',
  minute:"numeric",
  day:'numeric',
  month:'long',
  year:'numeric',
  weekday:'long',
}
const locale=navigator.language
const datess=new Intl.DateTimeFormat(locale,options).format(now)
labelDate.textContent=datess
// const date=`${now.getDate()}`.padStart(2,"0")
// const month=`${now.getMonth()+1}`.padStart(2,"0")
// const year=now.getFullYear()
// const hour=now.getHours()
// const min=`${now.getMinutes()}`.padStart(2,"0")
// labelDate.textContent=`${date}/${month}/${year},${hour}: ${min}`


    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    if(tt) clearInterval(tt)
    tt=timer()    // Update UI

    
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer

    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString())
    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    setTimeout(function(){
      currentAccount.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
    },5000)
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// console.log(23==23.0)
// console.log(0.1+0.2)
// console.log(typeof('23'));
// console.log(typeof(+"23"));
// console.log(Number.parseInt("34",10));
// console.log(Number.parseInt("34",10));
// console.log(Number.parseInt("2.5rem",10));
// console.log(Number.parseFloat("2.5rem",10));
// console.log(Number.isFinite(20));//best method
// console.log(Number.isNaN(+"45"))//if value is not an number 
// //math and rounding 
// console.log("------------------------------------------------")
// console.log(25**(1/2));
// console.log(Math.sqrt(25))
// console.log(Math.max(4,5,3,2,4,3,2,67,76,443))
// console.log(Math.PI*Number.parseFloat('10px')**2);
// console.log(Math.trunc(Math.random()*6)+1)
// console.log(Math.floor(1.51425))
// console.log("------------------------------------------------")
// console.log("------------------------------------------------")
// const MAthrandomint=function(max,min){
//   return Math.round((Math.random()*(max-min)+1)+min);
// };
// console.log(MAthrandomint(8,15));
// console.log("------------------------------------------------")
// console.log(Math.round(23.3));
// console.log((4.5632).toFixed(2));
// console.log((4.5632).toFixed(7));
// console.log(+(4.5632).toFixed(4));
// //Remeinder operator
// console.log("Reminder operator ")
// console.log(5%2);
// labelBalance.addEventListener('click',function(){
//   [...document.querySelectorAll(".movements__row")].forEach(function(curr,i){
//     if (i%2===0) curr.style.backgroundColor="orangered"
//   })
// })
// //numeric seperators 
// const diameter=28_746_000_000
// console.log(diameter,"ignores the _ value define the the variable ")
// //big ints 
// console.log(2**53-1);
// console.log(4442589632114785236987412558963);
// console.log(4442589632114785236987412558963n);
// console.log(4442589632114785236987412558963n*100000000000000000000000000000n);
// //exceptions 
// //console.log(Math.sqrt(4442589632114785236987412558963n));//will give an error
// console.log(20n >15);
// console.log(20n ===20);
// console.log(20n =='20' );
// console.log(typeof(20n));
// console.log(10n /3n);
// console.log(10/3);
// const now=new Date()
// console.log(now);
// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2020,5,25,59,25));
// console.log(new Date(0));
// const future=new Date(2020,5,25,59,25)
// console.log("=------------------------------------------------------------------");
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());//day of the week 
// console.log(future.getHours());
// console.log(future.getTime());
// console.log(future.toISOString());
// console.log(new Date(159323730000));
// console.log(future.setFullYear(2022));


// const future=new Date(2022,4,2,56,87)
// console.log("==========================================");
// console.log(+future);
// console.log(calcdatedisplay(new Date(2022,4,10),new Date(2022,4,15)));