import {XBoxButton, gameControl} from 'esm-gamecontroller.js';

gameControl.on('connect', (gamepad) => {
	gamepad.axeThreshold = [0.05];

	/** scroll */
	gamepad.on(XBoxButton.RIGHT_STICK_UP, () => {
		window.scrollBy(0, -Math.pow(gamepad.axeValues[1][1], 2) * 30);
	});
	gamepad.on(XBoxButton.RIGHT_STICK_DOWN, () => {
		window.scrollBy(0, Math.pow(gamepad.axeValues[1][1], 2) * 30);
	});

	/** close tab */
	gamepad.before(XBoxButton.Y, () => {
		chrome.runtime.sendMessage({action: 'closeCurrentTab'});
	});
});
