const color = document.getElementsByClassName("colors__color");
for(let i = 0; i < color.length; i++){
/*     color[i].style.animationDelay = i/10 + "s"; */
    let randomHue = Math.floor(Math.random()*(360 - 1) + 1);
    let randomSat = Math.floor(Math.random()*(79-11)+11) + "%";
    let randomBright = Math.floor(Math.random()*(100-11)+11) + "%";
    
    color[i].children[0].style.background =  `hsl(${randomHue} ${randomSat} ${randomBright})`
    console.log(randomHue, randomSat, randomBright)
    color[i].onclick = function(){
        color[i].children[0].classList.add("colors__circle--selected");
        navigator.clipboard.writeText(color[i].children[0].style.background);
        document.title = color[i].children[0].style.background;
    }
}