// Put your checkEmotion and speak functions here! ✨
// See ./original.js for their older JavaScript code.
async function checkEmotion(knownEmotions, emotion) {
	// Simulate database processing time by waiting a second...
	await new Promise((resolve) => {
		return setTimeout(resolve, 1000);
	});
	return knownEmotions.has(emotion);
}

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
