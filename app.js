const incre = document.getElementById('incre');
const reset = document.getElementById('reset');
const decre = document.getElementById('decre');
const counter = document.getElementById('counter');

var num = 0;

incre.addEventListener('click', () => {
    num++;
    counter.innerHTML = num;
    checker(num);

});


reset.addEventListener('click', () => {
    counter.innerHTML = 0;
    counter.style.color = 'black';

});

decre.addEventListener('click', () => {
    num--;
    counter.innerHTML = num;
    checker(num);
});


checker = (num) => {
    if (num < 0) {
        counter.style.color = 'red';
    } else if (num > 0) {
        counter.style.color = 'green';
    } else if (num === 0) {
        counter.style.color = 'black';
    }
};