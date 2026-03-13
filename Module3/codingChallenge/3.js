// 3. Create a function that generates an HTML unordered list from an array and
// returns the generated unordered list HTML markup as a string.

function generateUnorderedList(arr) {
	let html = "<ul>\n";
	for (let i = 0; i < arr.length; i++) {
		html += `    <li>${arr[i]}</li>\n`;
	}
	html += "</ul>";
	return html;
}

let arr = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
let unorderedListHTML = generateUnorderedList(arr);
console.log(unorderedListHTML);
