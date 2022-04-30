const container = document.querySelector('#container');

for(let i = 0; i < 16; i++){
    let row = document.createElement('div');
    row.classList.add('row')
    for(let k = 0; k < 16; k++){
        let col = document.createElement('div');
        col.classList.add('row');
        row.appendChild(col);
    }
    container.appendChild(row);
}

