const container = document.querySelector("#container");

function createGrid(){
    for (let i = 0; i < 16; i++){
        const row = document.createElement("div");
        row.classList.toggle("grid-row");
        container.appendChild(row);
        for (let j = 0; j < 16; j++){
            const column = document.createElement("span");
            column.classList.toggle("grid-col");
            row.appendChild(column);
        }
    }
}

createGrid();


