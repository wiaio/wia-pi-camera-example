'use strict';

var wia = require('wia')('your-device-secret-key');
var fs = require('fs');
var RaspiCam = require("raspicam");

// Setup the camera
var camera = new RaspiCam({
  mode: 'photo',
  output: __dirname + '/photo.jpg',
  encoding: 'jpg'
  // width:
  // height:
  // rotation:
});

// Listen for the "start" event triggered when the start method has been successfully initiated
camera.on("start", function(){
  console.log("Starting to take photo.");
});

// Listen for the "read" event triggered when each new photo/video is saved
camera.on("read", function(err, timestamp, filename){
  console.log("New photo created.", timestamp, filename);

  wia.events.publish({
    name: 'photo',
    file:  fs.createReadStream(__dirname + '/' + filename)
  });
});

// Take a photo
camera.start();
