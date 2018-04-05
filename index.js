'use strict';

var wia = require('wia')('device-secret-key');
var Gpio = require('onoff').Gpio;
var pushButton = new Gpio(18, 'in', 'both');

var RaspiCam = require("raspicam");

// Setup the camera
var camera = new RaspiCam({
  mode: 'photo',
  output: __dirname + '/photo.jpg',
  encoding: 'jpg'
});

//listen for the "start" event triggered when the start method has been successfully initiated
camera.on("start", function(){
  console.log("Starting to take photo.");
});

//listen for the "read" event triggered when each new photo/video is saved
camera.on("read", function(err, timestamp, filename){
	//do stuff
  console.log("New photo created.", timestamp, filename);
});

pushButton.watch(function (err, value) {
  if (err) {
    console.error('There was an error', err);
    return;
  }

  console.log('Button was pressed.');

  //to take a snapshot, start a timelapse or video recording
  // camera.start( );
});

function unexportOnClose() {
  pushButton.unexport();
};

process.on('SIGINT', unexportOnClose);
