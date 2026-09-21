let count = 0;

const valueElement = document.getElementById('value');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

function updateCounter() {
    valueElement.textContent = count;

    if (count > 0) {
        valueElement.style.color = 'green';
    } else if (count < 0) {
        valueElement.style.color = 'red';
    } else {
        valueElement.style.color = 'gray';
    }
}

increaseBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

decreaseBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});
updateCounter();
