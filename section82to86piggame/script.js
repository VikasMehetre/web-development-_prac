'use strict';
const socre0el = document.querySelector("#score--0")
const socre1el = document.getElementById("score--1")
const Player0el = document.querySelector(".player--0")
const Player1el = document.querySelector(".player--1")
const currentScore0el = document.getElementById("current--0")
const currentScore1el = document.getElementById("current--1")
let score = [0, 0]
let activeplayer = 0;
socre0el.textContent = 0
let playing = true
socre1el.textContent = 0
const diceel = document.querySelector(".dice")
diceel.classList.add('hidden')
let currentScore = 0;
const btnnew = document.querySelector(".btn--new")
const rollbtn = document.querySelector(".btn--roll")
const holdbtn = document.querySelector(".btn--hold")
rollbtn.addEventListener('click', function () {
    if (playing) {
        let dice = Math.trunc(Math.random() * 6) + 1
        diceel.classList.remove('hidden')
        diceel.src = `dice${dice}.png`
        if (dice !== 1) {
            currentScore += dice;
            console.log(currentScore);
            //dynamic entering 
            document.getElementById(`current--${activeplayer}`).textContent = currentScore
            //currentScore0el.textContent=currentScore
        }
        else {
            //active player switching
            document.getElementById(`current--${activeplayer}`).textContent = 0
            activeplayer = activeplayer === 0 ? 1 : 0;
            currentScore = 0
            Player0el.classList.toggle('player--active')
            Player1el.classList.toggle('player--active')

        }
    }
});
holdbtn.addEventListener('click', function () {
    if (playing) {
        score[activeplayer] += currentScore
        document.getElementById(`score--${activeplayer}`).textContent = score[activeplayer];
        if (score[activeplayer] >= 20) {//checking if the player has won or not 
            playing = false//should not use the buttons again 
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active')
            diceel.classList.add('hidden')


        }
        document.getElementById(`current--${activeplayer}`).textContent = 0
        activeplayer = activeplayer === 0 ? 1 : 0;
        currentScore = 0
        Player0el.classList.toggle('player--active')
        Player1el.classList.toggle('player--active')
    }
});
btnnew.addEventListener('click', function () {
    score = [0, 0];
    currentScore = 0;
    activeplayer = 0;
    playing = true;

    socre0el.textContent = 0;
    socre0el.textContent = 0;
    currentScore0el.textContent = 0;
    currentScore1el.textContent = 0;

    diceel.classList.add('hidden');
    Player0el.classList.remove('player--winner');
    Player1el.classList.remove('player--winner');
    Player0el.classList.add('player--active');
    Player1el.classList.remove('player--active');

});
