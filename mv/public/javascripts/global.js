(function () {
	var socket = io.connect();
	console.log(socket);

	$('body').on('click', 'button.meh', function (evt) {
		socket.emit('updated', 'Meh');;
		console.log('boo');
	});

	socket.on('broadcasted_update', function () {
		
		var el = $('<div class="object" />').css({'width': '300px', 'height': '150px', 'background': '#ff00ff', 'color': 'blue'});
		$('body').append(el);
		el.html('<p>MOOOOO WHATSUP');
		el.fadeOut();
		setTimeout(function () {
			el.fadeIn();
			setTimeout(function () {
				el.fadeOut();
			}, 20000);
		}, 1000);
	});
	
})();