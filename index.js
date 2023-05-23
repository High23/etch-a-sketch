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

const button = document.querySelector('#createGrid'); 
button.addEventListener('click', () => {
    height = document.querySelector('#height').value;
    width = document.querySelector('#width').value;
    if (height > 100 || width > 100 || height < 1 || width < 1) return;
    createGrid(height, width);
});

