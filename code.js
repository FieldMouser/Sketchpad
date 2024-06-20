let numOfCellsPerSide = 16;

function coloring()
{
    
}

function createGrid()
{
    size = 482/numOfCellsPerSide;
    for (let i = 0; i < numOfCellsPerSide; i++)
        {
            let cell = document.createElement("div");
            cell.classList.add("gridCell");
            cell.style.width = size + "px";
            cell.style.height = size + "px";
            cell.className = "gridElement" + i;

            cell.addEventListener("click", coloring);
            grid.appendChild(cell);
        }
}

createGrid();
