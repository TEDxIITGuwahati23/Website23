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
            console.dir(event)
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
            console.dir(event)

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




function play(id){
    console.log(id)
    document.getElementById(id).innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/`+id+`?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}
        

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

function sliderInit(id){
    const slider = document.getElementById(id);
    let isDown = false;
    let startX;
    let scrollLeft;
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active-drag');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active-drag');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active-drag');
    });

    slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        console.log(walk);
    });

}

function slideRight(event){

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


function moveSlidesRight(id) {
    
    let scrollingDiv = document.getElementById(id);
    let carouselWidth = scrollingDiv.offsetWidth;
    return function() {
        scrollingDiv.scroll({
            left: scrollingDiv.scrollLeft + carouselWidth,
            behavior: 'smooth'
        })
    }
}


function moveSlidesLeft(id) {
    let scrollingDiv = document.getElementById(id);
    let carouselWidth = scrollingDiv.offsetWidth;

    return function() {
        scrollingDiv.scroll({
            left: scrollingDiv.scrollLeft - carouselWidth,
            behavior: 'smooth'
        })
    }
}

  

// function parallaxImage(className){
//     // assuming a string
//     let images = document.getElementsByClassName(className);
//     Array.from(images).forEach((image)=>{

//         new simpleParallax(image, {
//             scale: 1.4,
//             delay: 0.2
//         });
//     })
// }
var image = document.getElementsByClassName("blogimg");
function mouseoverhandler(id){
    image[id].style.transform = "scale(1.2)"
}
function mouseouthandler(id){
    image[id].style.transform = "scale(1)"
}