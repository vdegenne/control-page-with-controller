import {XBoxButton, gameControl} from 'esm-gamecontroller.js';

gameControl.on('connect', async (gamepad) => {
	gamepad.axeThreshold = [0.05];

	await new Promise((r) => setTimeout(r, 100));

	console.log('the fuck is that');

	/** scroll */
	gamepad.on(XBoxButton.RIGHT_STICK_UP, () => {
		window.scrollBy(0, -Math.pow(gamepad.axeValues[1][1], 2) * 30);
	});
	gamepad.on(XBoxButton.RIGHT_STICK_DOWN, () => {
		window.scrollBy(0, Math.pow(gamepad.axeValues[1][1], 2) * 30);
	});

	/** close tab */
	gamepad.after(XBoxButton.Y, () => {
		chrome.runtime.sendMessage({action: 'closeCurrentTab'});
	});
});
