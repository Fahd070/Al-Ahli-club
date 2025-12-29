
// shortcut to do function
/*
let function1 = _ => 
    document.writeln('Hello, world!');

function1();

// we can use function inside object
let object1 = {
    num: 2,
    fun: function function1 () {
        document.write('Hello, world!');
    }

}
 object1.fun();

 // we can use function inside parameter

 function function3 (param) {
    param();
}
function3(function () {
    console.log('Hello, world!')
})

// we can call function after few seconds
// each 1000 contain 1 second.
// we must named the function by setTimeout to use this feature.

setTimeout (function() {
    console.log('Hello, world!');
}, 3000); 


// setInterval have the same feature, but loop this every seconds

setInterval(function () {
    document.writeln('Hello, world!');
}, 3000);
*/



// project

/*
        function randomNumbers () {
    let RandomNumber = Math.random();
    let computerMove = '';

    if (RandomNumber > 0 && RandomNumber < 1 /3) {
        computerMove = '✊';
    }
    else if (RandomNumber > 1 / 3 && RandomNumber < 2 / 3) {
        computerMove = '✋';
    }
    else if (RandomNumber > 2 / 3 && RandomNumber < 1) {
        computerMove = '✌️';
    }

    return computerMove;
        }

        function resetScore () {
            score.win = 0;
            score.lose = 0;
            score.tie = 0;
            document.querySelector('.scores').innerHTML = `win: ${score.win} lose: ${score.lose} tie: ${score.tie}`
        }

        function playGaming (playerMove) {
           const computerMove = randomNumbers();
           let result = '';
            if (playerMove === '✌️') {
                if (computerMove === '✊') {
                    result = 'You lose!';
                }
                else if (computerMove === '✋') {
                    result = 'You win!';
                }
                else if (computerMove === '✌️') {
                    result = 'Tie!';
                }
            }
            if (playerMove === '✊') {
                if (computerMove === '✊') {
                    result = 'Tie';
                }
                else if (computerMove === '✋') {
                    result = 'You lose!';
                }
                else if (computerMove === '✌️') {
                    result = 'You win!';
                }
            }
            if (playerMove === '✋') {
                if (computerMove === '✊') {
                    result = 'You win!';
                }
                else if (computerMove === '✋') {
                    result = 'Tie';
                }
                else if (computerMove === '✌️') {
                    result = 'You lose!';
                }

            }
                if (result === 'You win!') {
                score.win = score.win + 1;
                }
                else if (result === 'You lose!') {
                    score.lose = score.lose + 1;
                }
                else if (result === 'Tie') {
                    score.tie = score.tie + 1;
                }
                 
                document.querySelector('.scores').innerHTML = `win: ${score.win} lose: ${score.lose} tie: ${score.tie}`;

                document.querySelector('.js-show').innerHTML = `You pick ${playerMove}. Computer pick ${computerMove}. ${result}`;
               
        }

        let isAutoPlaying = false;
        let interval;

        function autoPlay1() {
            if (!isAutoPlaying) {
               interval = setInterval(function() {
                const playerMove = randomNumbers();
                playGaming(playerMove);
            }, 1000);

            isAutoPlaying = true;
            }
            else {
                clearInterval(interval);
                isAutoPlaying = false;
            }
            
        }

        let score = {
        win: 0,
        lose: 0,
        tie: 0
        };  

   // forEach method is another type of loop we can use it with array.
       /*  [
            2,
            3,
            4

        ].forEach(function(num) {
            console.log(num);
        }); 

        // another example of setTimeout and setInterval method
        let timeoutId;
        let count = 0;
        timeoutId = setInterval(() => console.log(count++), 2000);

        // another example of forEach
        // we use return instead of continue
        let array = [1, 2, 3];
        array.forEach((num) => {
            if(num === 1) {
                return;
            }
            console.log(num)

        })

        // arrow function 
        let hello = (greating) => console.log(greating);
        hello('hello');

        let num = [1, 2, 3, 4, 5, 6];
        let evenNum = num.filter((element) => element % 2 === 0);

        let oddNum = num.filter((element) => element % 2 !== 0);

        console.log(evenNum);
        console.log(oddNum);


        // we have another we to use onclick 
        const buttonElement1 = document.querySelector('.js-button');

        buttonElement.addEventListener('click', () => {
            console.log('hello, world!');
        })

        */

        // project by using addEventListener
        let score = {
        win: 0,
        lose: 0,
        tie: 0
        };  

        function randomNumbers () {
            let RandomNumber = Math.random();
                let computerMove = '';

                if (RandomNumber > 0 && RandomNumber < 1 /3) {
                    computerMove = '✊';
                }
                else if (RandomNumber > 1 / 3 && RandomNumber < 2 / 3) {
                    computerMove = '✋';
                }
                else if (RandomNumber > 2 / 3 && RandomNumber < 1) {
                    computerMove = '✌️';
                }
                return computerMove;
        }

        function playGaming (playerMove) {
                const computerMove = randomNumbers();
                let result = '';
                    if (playerMove === '✌️') {
                        if (computerMove === '✊') {
                            result = 'You lose!';
                        }
                        else if (computerMove === '✋') {
                            result = 'You win!';
                        }
                        else if (computerMove === '✌️') {
                            result = 'Tie!';
                        }
                    }
                    if (playerMove === '✊') {
                        if (computerMove === '✊') {
                            result = 'Tie';
                        }
                        else if (computerMove === '✋') {
                            result = 'You lose!';
                        }
                        else if (computerMove === '✌️') {
                            result = 'You win!';
                        }
                    }
                    if (playerMove === '✋') {
                        if (computerMove === '✊') {
                            result = 'You win!';
                        }
                        else if (computerMove === '✋') {
                            result = 'Tie';
                        }
                        else if (computerMove === '✌️') {
                            result = 'You lose!';
                        }

                    }
                        if (result === 'You win!') {
                        score.win = score.win + 1;
                        }
                        else if (result === 'You lose!') {
                            score.lose = score.lose + 1;
                        }
                        else if (result === 'Tie') {
                            score.tie = score.tie + 1;
                        }
                        
                        document.querySelector('.scores').innerHTML = `win: ${score.win} lose: ${score.lose} tie: ${score.tie}`;

                        document.querySelector('.js-show').innerHTML = `You pick ${playerMove}. Computer pick ${computerMove}. ${result}`;
                    
                }
        const buttonElement1 = document.querySelector('.js-button1');

        buttonElement1.addEventListener('click', () => {
                
            randomNumbers ();
            playGaming('✊');
            
        })

        // we can use onkeydown here in javascript
        document.body.addEventListener('keydown', (event) => {
            if (event.key === 'r'){
            randomNumbers ();
            playGaming('✊');
            }
            else if (event.key === 'p'){
            randomNumbers ();
            playGaming('✋');
            }
            else if (event.key === 's'){
            randomNumbers ();
            playGaming('✌️');
            }
            else if (event.key === 'Delete'){
            showResetConfirmation ();
            }
        })

        const buttonElement2 = document.querySelector('.js-button2');

        buttonElement2.addEventListener('click', () => {
            randomNumbers ();
            playGaming('✋');
        })

        const buttonElement3 = document.querySelector('.js-button3');

        buttonElement3.addEventListener('click', () => {
            randomNumbers ();
            playGaming('✌️');
        })

        const resetScore = document.querySelector('.reset-confirm-button');

        resetScore.addEventListener('click', () => {
            showResetConfirmation ();
            
        })
        function resetScore1 () {
            score.win = 0;
            score.lose = 0;
            score.tie = 0;
            document.querySelector('.scores').innerHTML = `win: ${score.win} lose: ${score.lose} tie: ${score.tie}`
        }

        function showResetConfirmation () {
            document.querySelector('.confirmMassage').innerHTML = `
            Are you sure to reset scores?
            <button class="yes-massage reset-confirm-button">Yes!</button>
            <button class="no-massage reset-confirm-button">No!</button>
            `;

            document.querySelector('.yes-massage').addEventListener('click', () => {
                resetScore1 ();
                hideMassage ();
            })

            document.querySelector('.no-massage').addEventListener('click', () => {
                hideMassage ();
            })
        }

        function hideMassage () {
            document.querySelector('.confirmMassage').innerHTML = '';
        }

        
        // we use filter to filter that numbers we need
        [1, -3, 5].filter((positive) => {
            if (positive > 0) {
                console.log(positive);
            }
        });

        // we can use map() to get copy of array 
        [1, 3, 5].map(num => console.log(num + 10))

        
        

        




        

        


        
        