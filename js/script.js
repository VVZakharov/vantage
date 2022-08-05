const burger=document.getElementById('burger');

burger.addEventListener('click',openBurger);

function openBurger(){

    const menu=document.getElementById('menu');
    menu.classList.toggle('open');
    burger.classList.toggle('open');
    
}