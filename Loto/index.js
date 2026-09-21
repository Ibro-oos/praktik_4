const ballsContainer = document.getElementById('balls-container');
const generateBtn = document.getElementById('generate-btn');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateLotto() {
    ballsContainer.innerHTML = '';

    for (let i = 0; i < 6; i++) {
        let num = getRandomInt(1, 99);
        let formattedNum = String(num).padStart(2, '0');
        const ball = document.createElement('div');
        ball.classList.add('ball');
        ball.textContent = formattedNum;
        ballsContainer.appendChild(ball);
    }
}

generateBtn.addEventListener('click', generateLotto);
