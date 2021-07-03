'use strict';

var player1 = document.querySelector('.player--0');
var player1name = document.getElementById('name-0');
var player1score = document.getElementById('score-0');
var player1curr = document.querySelector('.current');
var player1crrlabel = document.querySelector('.current-lebel');
var player1crrscore = document.getElementById('current-0');

var player2 = document.querySelector('.player--1');
var player2name = document.getElementById('name-1');
var player2score = document.getElementById('score-1');
var player2curr = document.querySelector('.current');
var player2crrlabel = document.querySelector('.current-lebel');
var player2crrscore = document.getElementById('current-1');
var btnroll = document.querySelector('.btn--roll');

var dicedom = document.querySelector('.dice');
var gameplaying = true;
var score = [0, 0];
var roundscore = 0;
var activeplayer = 0;


function init() {
    score = [0, 0];
    roundscore = 0;
    activeplayer = 0;

    player1score.textContent = 0;
    player1crrscore.textContent = 0;
    player2score.textContent = 0;
    player2crrscore.textContent = 0;

}

init();
//dicedom.style.display = 'none';
btnroll.addEventListener('click', function () {
    if (gameplaying) {
        var dicee = Math.floor(Math.random() * 6) + 1;
        if (dicee !== 1) {
            roundscore += dicee;
            dicedom.style.display = 'block';
            dicedom.src = 'dice-' + dicee + '.png';
            document.getElementById(`current-${activeplayer}`).textContent = roundscore;

        }
        else {
            dicedom.style.display = 'block';
            dicedom.src = 'dice-' + dicee + '.png';
            roundscore = 0;
            if (activeplayer === 0) {
                activeplayer = 1;
            }
            else {
                activeplayer = 0;
            }
            document.getElementById('current-0').textContent = 0;
            document.getElementById('current-0').textContent = 0;
            document.querySelector('.player--0').classList.toggle('active');
            document.querySelector('.player--1').classList.toggle('active');
            dicedom.style.display = 'none';


        }

    }
}
);
document.querySelector('.btn--hold').addEventListener('click', function () {
    score[activeplayer] += roundscore;
    document.getElementById(`score-${activeplayer}`).textContent = score[activeplayer];

    if (score[activeplayer] >= 100) {
        document.getElementById(`name-${activeplayer}`).textContent = 'Winner';
        document.querySelector('.dicedom').style.display = 'none';
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');



    }
    else {
        nextplayer();
    }


}


);

function nextplayer() {

    if (activeplayer === 1) {
        activeplayer = 0;

    }
    else {
        activeplayer = 1;

    }
    document.getElementById(`score-${activeplayer}`).textContent = roundscore;
    roundscore = 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    dicedom.style.display = 'none';
}
document.querySelector('.btn--new').addEventListener('click', init);



