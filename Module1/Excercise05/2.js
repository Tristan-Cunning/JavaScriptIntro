// 2. Describe a hotel booking as an object. Make sure you include the room,
// the name of the person or people staying in the room, the start date, the
// end date, and the total price. Research how it is optimal to represents dates.

let booking = {
	roomNumber: 275,
	guest: ["Mr. First Last", "Ms. First Last"],
	startDate: {
		year: 2026,
		month: 3,
		day: 8,
	},
	endDate: {
		year: 2026,
		month: 3,
		day: 15,
	},
	priceUSCents: 108875,
	currency: "USD",
};
