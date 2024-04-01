const button = document.getElementById('btn');
const colortext = document.getElementById('color');
const wrap = document.getElementById('wrap');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F'];

// to get random hex value
function randomHexValue(){
    
    let randomIndex = Math.floor(Math.random()*16);
    return hex[randomIndex]
    
}

// main fuction to change BG
button.addEventListener('click', function(){

    let hexColor  = '#';
    for (let i=1; i<=6; i++){
        hexColor += randomHexValue()
    }

    wrap.style.backgroundColor = hexColor;
    colortext.innerHTML = hexColor;
})

