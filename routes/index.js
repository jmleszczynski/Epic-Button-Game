module.exports = functions Route(app, server) {
	var io = required('socket.io').listen(server)
	var counter = 0;

	io.sockets.on('connection', function(socket) {

		socket.on('push_button', function(socket) {
			counter += 1;
			io.emit('push_counter', {response: counter});
		});

		socket.on("reset_counter", function (data) {
			counter = 0;
			io.emit('reset_response', {response: counter});
		});
	});

	app.get('/', function(req, res) {
		res.render("index");
	});
};