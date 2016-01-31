// Run Node.js server and send sound sensor data
// 	from the Arduino to the Unity mobile app
//	using Socket.io

var SerialPort = require('serialport').SerialPort;

// Pass in the port the Arduino is running on
//	through the command line
//	Example of invoking the Node server on Windows:
//		node transmit.js COM3
//	Example of invoking the Node server on Linux/OSX:
//		node transmit.js /dev/ttyACM0
//
// Capture serial port argument
var port = process.argv[2]

var sp = new SerialPort(port, {
	baudrate: 9600
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
	console.log('Data received: ' + data.toString());
}

function onClose() {
	console.log('Port closed!');
}

function onError(err) {
	console.log('ERROR: ' + err);
}
