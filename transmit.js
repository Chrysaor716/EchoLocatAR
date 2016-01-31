// Run Node.js server and send sound sensor data
// 	from the Arduino to the Unity mobile app
//	using Socket.io

var SerialPort = require('serialport');

// Pass in the port the Arduino is running on
//	through the command line
//	Example of invoking the Node server:
//		node transmit.js COM3
//
// Capture serial port argument
var port = process.argv[2]

var sp = new SerialPort(port, {
	baudrate: 9600,
	parser:   SerialPort.parsers.readline('\n')
});

// Event listeners
sp.on('open', onPortOpen);
sp.on('data', onData);
sp.on('close', onClose);
sp.on('error', onError);

function onPortOpen() {
	console.log('Port open!');
}

function onData(data) {
	console.log('Data received: ' + data);
}

function onClose() {
	console.log('Port closed!');
}

function onError() {
	console.log('Error occurred!');
}
