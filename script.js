'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number';

console.log(document.querySelector('.message').textContent);

document.querySelector('.input').value = 12;
console.dir(document.querySelector('.input'));

// document.querySelector('.score').textContent = 13;
*/
// const a = function() {

// }
// a();
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;



document.querySelector('.check').addEventListener('click', function(){

    //console.log(document.querySelector('.input').value);
    const input = Number(document.querySelector('.input').value);

    // When no number guess
    if(!input){
        document.querySelector('.message').textContent = '🚫 No Number';

        // When you win the game
    } else if (input === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number';

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '16rem';
        
        document.querySelector('.number').textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            document.querySelector('.Highscore').textContent = highScore;
        }

        //When input is greater than secreNumber
    } else if (input > secretNumber) {

        if (score > 1){
            document.querySelector('.message').textContent = '📈 Too High';

            score--; // score = score - 1;
            document.querySelector('.score').textContent = score;
            

        }else {
            document.querySelector('.message').textContent = '💥 You lost the game!';

            document.querySelector('.score').textContent = 0;
            
        }
       
        // When input is lower than secrerNumber
    } else if (input < secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = '📉 Too Low';

        score--; // score = score - 1;
       document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';

            document.querySelector('.score').textContent = 0;
        }
        
    }
})

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random()*20)+1;
    score = 20;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.input').value = " ";

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '8rem';

})