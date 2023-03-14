let form = document.querySelector('#gridForm');
let clearButton = document.querySelector('#clear');
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true) //função que verifica se o mouse está pressionado
document.body.onmouseup = () => (mouseDown = false) 

form.addEventListener('submit', (e) => {
    let gridSize = form.gridSize.value;
    let grid = document.querySelector('#grid');
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < gridSize * gridSize; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', (e) => {
            cell.style.backgroundColor = 'black';
        });
        cell.addEventListener('mouseover', (e) => {
            if (mouseDown) {
            cell.style.backgroundColor = 'black';
            }
        });
        grid.appendChild(cell);
    }
    e.preventDefault();
});

clearButton.addEventListener('click', (e) => {
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
});

