let color = 'black'
let rainbow = false

const grid = document.querySelector('#grid');
const resetBtn = document.getElementById('reset');
const blackBtn = document.getElementById('black');
const rainbowBtn = document.getElementById('rainbow');
const sizeBtn = document.getElementById('sizePick');
const sizeLbl = document.getElementById('sizeLabel')

resetBtn.addEventListener('click', reset);
blackBtn.addEventListener('click', () => {
    if(rainbow) {
        reset();
    }
    color = 'black'
    blackBtn.classList.add('active');
    rainbowBtn.classList.remove('active');
    rainbow = false
});

rainbowBtn.addEventListener('click', () => {
    if(!rainbow) {
        reset();
    }
    blackBtn.classList.remove('active');
    rainbowBtn.classList.add('active');
    rainbow = true
});

sizeBtn.addEventListener('click', () => {
    reset();
    changeSize(sizeBtn.value);
});


blackBtn.classList.add('active');
putDivs(16);

function reset() {
    let divList = Array.from(document.querySelectorAll('.grid-item'));
    divList.forEach(element => {
        element.style.backgroundColor = 'white'
    });
}

function changeSize(size) {
    sizeLbl.textContent = `Size: ${size}x${size}`;
    removeDivs();
    putDivs(size);

}

function removeDivs() {
    let divList = Array.from(document.querySelectorAll('.grid-item'));
    divList.forEach(element => {
        grid.removeChild(element)
    });
}

function putDivs(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    for(let i = 0; i < size**2; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item'); 
        div.style.width = `${32/size} vw`
        div.style.height = `${32/size} vw`
        grid.appendChild(div);
     
        div.addEventListener('mouseover', () => {
            if(rainbow == true) {
                 const randomColor = Math.floor(Math.random()*16777215).toString(16);
                 div.style.backgroundColor = "#" + randomColor;
            } else {
                 div.style.backgroundColor = `${color}`
            }
        });
     }
}

