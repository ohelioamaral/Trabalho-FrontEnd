const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 40)
});


const menuHamb = document.querySelector('.menu-hamburguer');
const menuHambI = document.querySelector('.menu-hamburguer i');
const menuOpcoes = document.querySelector('.menu-opcoes');

menuHamb.onclick = function () {
    menuOpcoes.classList.toggle('open');
    const isOpen = menuOpcoes.classList.contains('open');

    menuHambI.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
};



const topo = document.getElementById("top");

window.addEventListener("scroll", function() {
    topo.classList.toggle("show-top", window.scrollY > 140);
    topo.classList.toggle("hide-top", window.scrollY < 140);
});

window.onload = () => {
    topo.classList.toggle("hide-top");
}