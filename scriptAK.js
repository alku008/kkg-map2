let helloWorldPopup;
WA.onInit().then(() => {
    console.log('Current player name: ', WA.player.name);
	//WA.chat.sendChatMessage('Hello world', 'Mr Robot');
	

	// Open the popup when we enter a given zone
	helloWorldPopup = WA.room.onEnterLayer("silentzone").subscribe(() => {
		WA.ui.openPopup("popupRectangle", 'Hello world!', [{
			label: "Close",
			className: "primary",
			callback: (popup) => {
				// Close the popup when the "Close" button is pressed.
				popup.close();
			}
		}]);
	});

	// Close the popup when we leave the zone.
	WA.room.onLeaveLayer("silentzone").subscribe(() => {
		helloWorldPopup.close();
	});
});