// Run Node.js server and send sound sensor data
// 	from the Arduino to the Unity mobile app
//	using Socket.io

var io = require('socket.io')();
//var SerialPort = require('serialport').SerialPort;
var serialport = require('serialport');
var SerialPort = serialport.SerialPort;

// Pass in the port the Arduino is running on
//	through the command line
//	Example of invoking the Node server on Windows:
//		node transmit.js COM3
//	Example of invoking the Node server on Linux/OSX:
//		node transmit.js /dev/ttyACM0
//
// Capture serial port argument
var port = process.argv[2]

var serialport = new SerialPort(port, {
	baudrate: 9600,
	parser: serialport.parsers.readline("\n")
});

// Create a new socket
io.sockets.on('connection', function(socket) {
	console.log('Connection established.');
	// Listen to Arduino messages0
	serialport.on('data', function(data) {
		onData(data, socket);
	});
});
io.listen(4567);

// Event listeners
serialport.on('open', onPortOpen);
//serialport.on('data', onData);
serialport.on('close', onClose);
serialport.on('error', onError);

function onPortOpen() {
	console.log('Port open!');
}

onData = function(data, socket) {
	try {
		var jsondata = JSON.parse(data);
		console.log('Data received: %j', jsondata);
		socket.broadcast.emit(JSON.stringify(jsondata));
	} catch (err) {
		return console.error(err);
	} 
};

function onClose() {
	console.log('Port closed!');
}

function onError(err) {
	console.log('ERROR: ' + err);
}
