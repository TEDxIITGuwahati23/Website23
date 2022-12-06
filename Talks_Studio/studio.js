var right = [0,0,0,0];
var maxMargin=[];
var jumpMargin = 150;

function setWidth(){
var boxwidth = document.querySelector(".card").offsetWidth;
var displaywidth = document.querySelector(".row").offsetWidth;
var displayheight = document.querySelector(".card").offsetHeight;
let x=document.querySelectorAll(".row-container");
for (let i=0;i<x.length;i++){
    var children = document.querySelectorAll(".row-container"+(i+1).toString()+" > .card").length;
    x[i].style.width = children * boxwidth+"px";
    maxMargin.push((children)*boxwidth - displaywidth);
}
document.querySelectorAll("button")[0].style.height = displayheight+"px";
document.querySelectorAll("button")[1].style.height = displayheight+"px";
}

function slideLeft(event,i){
var rowcont = document.querySelectorAll(".row-container")[i];
if(right[i] <= -maxMargin[i]){
    event.preventDefault();
}
else{
    right[i] -= jumpMargin;
}
rowcont.style.marginLeft = right[i]+"px";
}

function slideRight(event,i){
var rowcont = document.querySelectorAll(".row-container")[i];
if(right[i]==0){
    event.preventDefault();
}
else if(right[i] >= maxMargin[i]){
    event.preventDefault();
}
else{
    right[i] += jumpMargin;
}
rowcont.style.marginLeft = right[i]+"px";
}

window.onload=setWidth;

function changeMenu()
{
const leftMenu = document.getElementById('leftContainer');
leftMenu.classList.toggle('close');
} 

function myFunction() 
{
document.getElementById("myDropdown").classList.toggle("close");
}

function myFunctionleft()
{
document.getElementById("myDropdownleft").classList.toggle("close");
}



function play(id){
    console.log(id)
    document.getElementById(id).innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/`+id+`?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}
     