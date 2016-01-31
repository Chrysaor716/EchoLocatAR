// Run Node.js server and send sound sensor data
// 	from the Arduino to the Unity mobile app
//	using Socket.io

//var scrapper = require('json-scrape')();
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

//SerialPort.list(function(err, ports) {
//	console.log(ports);
//});

var serialport = new SerialPort(port, {
	baudrate: 9600,
	parser: serialport.parsers.readline("\n")
});

// Event listeners
serialport.on('open', onPortOpen);
serialport.on('data', onData);
serialport.on('close', onClose);
serialport.on('error', onError);

//scrapper.on('data', function(jsondata) {
//	console.log(jsondata);
//});

function onPortOpen() {
	console.log('Port open!');
}

function onData(data) {
	console.log('Data received: ' + data);
//	scrapper.write(data.toString());
}

function onClose() {
	console.log('Port closed!');
}

function onError(err) {
	console.log('ERROR: ' + err);
}
