let helloWorldPopup;
WA.onInit().then(() => {
    console.log('Current player name: ', WA.player.name);
	WA.chat.sendChatMessage('Herzlich willkommen! ', 'Admin');
	
	

	// Open the popup when we enter a given zone
	helloWorldPopup = WA.room.onEnterLayer("silentzone").subscribe(() => {
		WA.ui.openPopup("popupSilent", 'In der Silent-Zone!', [{
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
	
	// Open the popup when we enter a given zone
	helloWorldPopup = WA.room.onEnterLayer("start").subscribe(() => {
		WA.ui.openPopup("popupEingang", 'Die lila Flächen sind Meeting Flächen!', [{
			label: "Close",
			className: "primary",
			callback: (popup) => {
				// Close the popup when the "Close" button is pressed.
				popup.close();
			}
		}]);
	});

	// Close the popup when we leave the zone.
	WA.room.onLeaveLayer("start").subscribe(() => {
		helloWorldPopup.close();
	});
});