let text = document.getElementById('first_text');
let leaf = document.getElementById('leaf');
let hill_one = document.getElementById('hill_one');
let hill_four = document.getElementById('hill_four');
let hill_five = document.getElementById('hill_five');

window.addEventListener('scroll', () => { 
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill_one.style.top = value * 1.5 + 'px';
    hill_five.style.left = value * 2.5 + 'px';
    hill_four.style.right = value * 2.5 + 'px';
})