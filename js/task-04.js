let counterValue = 0;
const plusBtn = document.querySelector('button[data-action="increment"]');
const minusBtn = document.querySelector('button[data-action="decrement"]');
const spanEl = document.querySelector("#value");
plusBtn.addEventListener('click', () => {
    counterValue += 1
     spanEl.innerHTML = counterValue;
})
minusBtn.addEventListener('click', () => {
    counterValue -= 1
     spanEl.innerHTML = counterValue;
})