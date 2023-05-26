var container = document.getElementById("container");

var colors = ["#39B5E0", "#A31ACB", "#FF78F0", "#F5EA5A", "#FF7B54"]
var kareler = 400


for(let i = 0; i <kareler; i++){

    const kare = document.createElement("div")
    kare.classList.add("kare")

    kare.addEventListener("mouseover", ()=>SetColor(kare));

    kare.addEventListener("mouseout", ()=>removeColor(kare))

    container.appendChild(kare)
}


function SetColor(element){
    var color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 3px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = "#1d1d1d"
    element.style.boxShadow = "0 0 3px"
}

function getRandomColor(){
    return colors [Math.floor(Math.random() * colors.length)]    
}
