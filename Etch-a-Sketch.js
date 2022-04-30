const container = document.querySelector('#container');

const newGrid = document.querySelector('#newGridButton');

newGrid.addEventListener('click', createGrid);

createGrid()

function createGrid(){
    removeGrid();
    let size = prompt('Inpiut the size of your new grid')
    if (size > 100) {size = 100};
    for(let i = 0; i < size; i++){
        let row = document.createElement('div');
        row.classList.add('row')
        for(let k = 0; k < size; k++){
            let col = document.createElement('div');
            col.classList.add('cell');
            row.appendChild(col);
        }
        container.appendChild(row);
    }

    const cells = Array.from(document.querySelectorAll('.cell'));

    cells.forEach(cell => cell.addEventListener('mouseover', paintCell));
}

function removeGrid(){
    const cells = Array.from(document.querySelectorAll('.cell'));
    const rows = Array.from(document.querySelectorAll('.row'));
rows.forEach(row => row.remove());
cells.forEach(cell => cell.remove());

}

function paintCell(cell) {cell.target.classList.add('painted')};

