let dbTable = [
	{ first: "A", last: "B" },
	{ first: "C", last: "D" },
];
function logChangedRecords(records) {
	let internalRecords = structuredClone(records);
	for (let record of internalRecords) {
		record.title = "Ms.";
	}
	console.table(internalRecords);
}
logChangedRecords(dbTable);
console.table(dbTable);
