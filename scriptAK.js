WA.onInit().then(() => {
    console.log('Current player name: ', WA.player.name);
	WA.chat.sendChatMessage('Hello world', 'Mr Robot');
});