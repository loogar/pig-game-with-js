/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, fullScore, activePlayer, gamePlaying ;

start();

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {

        var dice = Math.floor(Math.random()*6) + 1;

        var diceDom =  document.querySelector('.dice');
    
        diceDom.style.display = 'block';
       
        diceDom.src = 'images/dice-' + dice + '.png'; 
    

    

  
    if(dice !== 1){
     
      fullScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = fullScore;

    }else {
        nextPlayer();
    }
}});



document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
    Scores[activePlayer] += fullScore;
 
document.querySelector('#score-' + activePlayer).textContent = Scores[activePlayer];

if(Scores[activePlayer] >= 100){
    document.querySelector('#name-' + activePlayer).textContent = 'winner';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;

} else {
    nextPlayer();
}
}});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        fullScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

       document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', start);


function start(){

Scores = [0, 0];
fullScore = 0;
activePlayer= 0;
gamePlaying= true;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');
}
