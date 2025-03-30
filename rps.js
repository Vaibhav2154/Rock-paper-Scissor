let computerChoice = '';
        let result = '';
        let playerMove = '';



        const score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0
        };

        function pickComputerMove() {
            const randomNumber = Math.random();
            if (randomNumber < 0.33) {
                computerChoice = 'rock';
            } else if (randomNumber < 0.66) {
                computerChoice = 'paper';
            } else {
                computerChoice = 'scissors';
            }
        }

        function displayScore() {
            document.querySelector('.js-score').innerHTML =
                `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

        function resetGame() {
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;
            localStorage.removeItem('score');

            displayScore();
        }


        function playGame(playerMove) {
            pickComputerMove();
            result = '';
            if (playerMove === 'scissors') {
                playerMove = 'scissors';
                if (computerChoice === 'scissors') {

                    result = 'Tie'
                    console.log('Tie');
                } else if (computerChoice === 'rock') {
                    result = 'Computer win';
                    console.log('Computer win!');
                } else {
                    result = 'You Win';
                    console.log('You Win!');
                }
            }
            else if (playerMove === 'rock') {
                playerMove = 'rock';
                if (computerChoice === 'rock') {
                    result = 'Tie'
                    console.log('Tie');
                } else if (computerChoice === 'paper') {
                    result = 'Computer win';
                    console.log('Computer win!');
                } else {
                    result = 'You Win';
                    console.log('You Win!');
                }
            } else {
                if (computerChoice === 'paper') {
                    playerMove = 'paper';
                    result = 'Tie'
                    console.log('Tie');
                } else if (computerChoice === 'scissors') {
                    result = 'Computer win';
                    console.log('Computer win!');
                } else {
                    result = 'You Win';
                    console.log('You Win!');
                }
            }
            if (result === 'You Win') {
                score.wins++;
            } else if (result === 'Computer win') {
                score.losses++;
            } else {
                score.ties++;
            }

            localStorage.setItem('score', JSON.stringify(score));

            function displayResult() {
                document.querySelector('.js-result').innerHTML = result;

                document.querySelector('.js-moves').innerHTML = `You 
        <img src="rps-images/${playerMove}-emoji.png" class="move-icon">
        <img src="rps-images/${computerChoice}-emoji.png" class="move-icon">
        Computer`;
            }
            displayScore();
            displayResult();
        }