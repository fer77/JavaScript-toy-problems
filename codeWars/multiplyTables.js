// Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions.

// Example:

// multiplicationTable(3,3)

// -->[[1,2,3],[2,4,6],[3,6,9]]

// Each value on the table should be equal to the value of multiplying the number in its first row times the number in its first column.

function multiplicationTable(row, col){
	var table = [];
	
	for (var r = 1; r <= row; r++) {
		var tableRow = [];

		for (var c = 1; c <= col; c++) {
			tableRow.push(r * c);
        }
		table.push(tableRow);
    }

return table;
}

multiplicationTable();
