// 4. Create a function that generates an HTML table from a 3x3 array and
// returns the generated table HTML markup as a string.

let matrix3x3 = [
	[`1 item 1`, `2 item 2`, `3 item 3`], // Row 0
	[`4 item 4`, `5 item 5`, `6 item 6`], // Row 1
	[`7 item 7`, `8 item 8`, `9 item 9`], // Row 2
];

function generateTable(matrix) {
	let html = "<table>\n";
	for (let i = 0; i < matrix.length; i++) {
		html += "  <tr>\n";
		for (let j = 0; j < matrix[i].length; j++) {
			html += `    <td>${matrix[i][j]}</td>\n`;
		}
		html += "  </tr>\n";
	}
	html += "</table>";
	return html;
}

let tableHTML = generateTable(matrix3x3);
console.log(tableHTML);
