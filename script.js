function createTable() {
    // Get the number of rows from the user
    const rows = prompt("Input number of rows:").trim(); // Trim any whitespace
    // Get the number of columns from the user
    const cols = prompt("Input number of columns:").trim(); // Trim any whitespace

    // Convert inputs to integers
    const rowCount = parseInt(rows, 10);
    const colCount = parseInt(cols, 10);

    // Validate the input
    if (isNaN(rowCount) || isNaN(colCount) || rowCount <= 0 || colCount <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return; // Exit the function if input is invalid
    }

    // Get the table element by ID
    const table = document.getElementById("myTable");

    // Clear existing table content
    table.innerHTML = '';

    // Create the table rows and cells
    for (let i = 0; i < rowCount; i++) {
        // Create a new row
        const row = table.insertRow();

        for (let j = 0; j < colCount; j++) {
            // Create a new cell
            const cell = row.insertCell();
            // Set the text content of the cell
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
