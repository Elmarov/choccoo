let a = document.querySelector('.slider-text__composition');
let b = document.querySelector('.composition-list');
let c = document.querySelector('.composition-item');


a.addEventListener('mouseover',function () {
    b.style.display = 'block';
    b.style.owerflow = 'visible';
    b.style.height = 'auto';
    // c.style.owerflow = 'visible';
    // c.style.height = 'auto';
    // b.style.opasiti = '1';
    // b.style.top="0";
    // b.style.left="92px";
    b.style.transition=".8s";
});
a.addEventListener('mouseout',function () {
    b.style.display = 'none';
    b.style.owerflow = 'hidden';
    b.style.height = '0px';
    // c.style.owerflow = 'hidden';
    // c.style.height = '0px';
    // b.style.opasiti = '0';
    // b.style.top="-9999px";
    // b.style.left="-9999px";
});

console.log(a);