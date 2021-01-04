/////////////////////////
//DECLARATIONS
const mainGrid = document.querySelector('.main--grid');
let reset = document.querySelector('.reset');
const gridDimension = 20;
let box = [];


const createGrid = function(numberOfRows){
  
    let numberOfBoxes = numberOfRows * numberOfRows;
    
    for(let i=1; i<=numberOfBoxes; i++){
        box[i-1] = document.createElement('div');
        
        mainGrid.style.gridTemplateColumns = `repeat(${numberOfRows}, 1fr)`;
        mainGrid.style.gridTemplateRows = `repeat(${numberOfRows}, 1fr)`;   
    
        mainGrid.insertAdjacentElement('beforeend', box[i-1]);
        box[i-1].classList.add('box');
        box[i-1].addEventListener('mouseover', function(){
            box[i-1].classList.add('hover');
            }
        );
    }
    
}

reset.addEventListener('click', function(){
    let numebrOfBoxes = gridDimension * gridDimension;
    for(let i=0; i<= numebrOfBoxes; i++){
        box[i].classList.remove('hover');
    }
})

createGrid(gridDimension);