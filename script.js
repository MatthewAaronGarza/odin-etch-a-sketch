const gridContainer = document.querySelector('#grid-container')

// Create a 16x16 grid
for (let i = 0; i < 16 * 16; i++) {
  // Create a new grid cell element
  const cell = document.createElement('div');
  cell.classList.add('grid-cell');
  // Add a click event listener to the cell
  cell.addEventListener('click', () => {
    cell.style.backgroundColor = 'black';
  });
  // Add the cell to the grid container
  container.appendChild(cell);
}