// Movement

const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Making title and sneaker 3D
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');

//Moving Animation
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotate(${yAxis}deg)`
});

//Animated in
container.addEventListener('mouseenter', (e) => {
    card.style.transition = "none";
    //Popout title
title.style.transform = "translateZ(180px)";
sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";

});

//animate out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popout reset
title.style.transform = "translateZ(0px)";
sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
});







