chrome.runtime.onMessage.addListener(
	function (message, _sender, _sendResponse) {
		if (message.action === 'closeCurrentTab') {
			chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
				if (tabs[0].id === undefined) {
					return;
				}
				chrome.tabs.remove(tabs[0].id);
			});
		}
	},
);
