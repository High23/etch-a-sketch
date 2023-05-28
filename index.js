const container = document.querySelector("#container");

function createGrid(height, width){
    for (let i = 0; i < height; i++){
        const row = document.createElement("div");
        row.classList.toggle("grid-row");
        container.appendChild(row);
        for (let j = 0; j < width; j++){
            const column = document.createElement("span");
            column.classList.toggle("grid-col");
            row.appendChild(column);
        }
    }
}

function changeColorOnHover(col) {
    if (col.type !== 'mouseover') return;
    this.classList.add('hovered');
}

function clearGrid(height, width){
    for (let i = 0; i < height; i++){
        let row = document.querySelector('.grid-row');
        for (let j = 0; j < width; j++){
            let column = document.querySelector('.grid-col');
            row.removeChild(column);
        }
        container.removeChild(row);
    }
}

let height = 5;
let width = 5;
createGrid(height, width);
let columns = document.querySelectorAll('.grid-col');
columns.forEach(gridCol => gridCol.addEventListener('mouseover', changeColorOnHover));

const button = document.querySelector('#createGrid'); 
button.addEventListener('click', () => {
    if (Boolean(document.querySelector('#height').value) == false || (Boolean(document.querySelector('#width').value) == false)) return;
    if (height !== undefined || width !== undefined) clearGrid(height, width);
    height = document.querySelector('#height').value;
    width = document.querySelector('#width').value;
    if (height > 100 || width > 100 || height < 1 || width < 1) return;
    createGrid(height, width);
    columns = document.querySelectorAll('.grid-col');
    columns.forEach(gridCol => gridCol.addEventListener('mouseover', changeColorOnHover));
});

