import { Waterfall } from "../../../interfaces/vacation-planning/03-landmarks/solution";
export function runCommands() {
	// Declare your variables and runtime logic here! ✨
	let resupply: "food" | "water" | undefined;
	let food: number = 5;
	let water: number = 5;
	let day: number = 1;

	for (day; day <= 7; day += 1) {
		const randomNum = Math.floor(Math.random() * 6) + 1;
		let command: "water" | "food" | number;

		switch (randomNum) {
			case 1:
				command = "food";
				break;

			case 2:
				command = "water";
				break;

			default:
				command = randomNum;
				break;
		}

		if (typeof command === "number") {
			switch (resupply) {
				case "food":
					food += command;
					resupply = undefined;
					break;

				case "water":
					water += command;
					resupply = undefined;
					break;

				default:
					resupply = randomNum % 2 === 0 ? "food" : "water";
					break;
			}
		}

		switch (command) {
			case "food":
				resupply = "food";
				break;

			case "water":
				resupply = "water";
				break;
		}

		food -= 1;
		water -= 1;

		if (food === 0 || water === 0) {
			return false;
		}
	}

	return true;
}
