
let lightBtnOn = document.getElementById('btnOn');

lightBtnOn.addEventListener('click', lightBulbOn);

function lightBulbOn(){
    document.getElementById('light').src = 'images/pic_bulbon.gif';
};




let lightBtnOff = document.getElementById('btnOff');

lightBtnOff.addEventListener('click', lightBulbOff);

function lightBulbOff(){
    document.getElementById('light').src = 'images/pic_bulboff.gif';
};






//alert("hello");