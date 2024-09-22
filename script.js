const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');
const h3 = document.querySelector('h3');
const reset = document.querySelector('.reset');
const ipt = document.querySelector('#ipt');

increment.addEventListener('click' , (event) => {
    let countValue = parseInt(h3.innerText);
    let iptValue = parseInt(ipt.value);
    h3.innerText = countValue + iptValue;
});

decrement.addEventListener('click' , (event) => {
    let countValue = parseInt(h3.innerText);
    let iptValue = parseInt(ipt.value);
    h3.innerText = countValue - iptValue;
});

reset.addEventListener('click' , () => {
    h3.innerText = 0;
})