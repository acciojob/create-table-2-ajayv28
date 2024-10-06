function createTable() {
    // Get the number of rows from the user
    const rows = prompt("Input number of rows:");
    // Get the number of columns from the user
    const cols = prompt("Input number of columns:");

    // Get the table element by ID
    const table = document.getElementById("myTable");

    // Clear existing table content
    table.innerHTML = '';

    // Create the table rows and cells
    for (let i = 0; i < rows; i++) {
        // Create a new row
        const row = table.insertRow();

        for (let j = 0; j < cols; j++) {
            // Create a new cell
            const cell = row.insertCell();
            // Set the text content of the cell
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}

