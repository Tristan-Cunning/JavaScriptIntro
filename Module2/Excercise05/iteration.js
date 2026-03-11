let list = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
//Solution 1: While loop
let i = 0;
while (i < list.length) {
	console.log(list[i]);
	i++;
}

// Solution 2: For loop
for (let i = 0; i < list.length; i++) {
	console.log(list[i]);
}

// Solution 3: for ... in
for (let i in list) {
	console.log(list[i]);
}

//Solution 4: for ... of
for (let day of list) {
	console.log(day);
}
