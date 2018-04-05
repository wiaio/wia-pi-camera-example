# Pi-camera and wia
First of all, with the Pi switched off, you’ll need to connect the Camera Module to the Raspberry Pi’s camera port.
Make sure its firmly attached to the PI.

## Enable your camera
Login into your pi and in the terminal type:
```
sudo raspi-config
```
In the raspi-config,
* Go to option 5:
`Interfacing Options Configure connections to peripherals` and hit select
* Hit select on `p1 Camera Enablr/Disable connection to the Raspbeery Pi Camera`
* Select `finish`


## Install Node.js
Run these commands in terminal (One line at a time):
```
wget http://node-arm.herokuapp.com/node_latest_armhf.deb
sudo dpkg -i node_latest_armhf.deb
```
Check if it installed correctly by running:
```
node -v
```
## Download and install the code
In the terminal, run the following (One line at a time):
```
sudo apt-get update
sudo apt-get install git
git clone https://github.com/wiaio/wia-pi-camera-example.git
cd wia-pi-camera-example
npm install

```
## Add your Wia device secret key
In the terminal, run:
```
nano run-camera.js
```
 In nano, go to the line below

```
var wia = require('wia')('your-device-secret-key');

```
and replace `your-device-secret-key` with a Device Secret key from Wia, if you haven't got one, details on how to get yourself setup with Wia can be found [here](https://developers.wia.io/docs/getting-started-overview).<br/>

To save the file:  
* Press `Ctrl + x`
* Type `y`
* Press `Enter`

## Run the code
From the terminal, run:
```
node run-camera.js
```
Hold your camera to take a picture and that should be it

## View your photo on wia
Head to your Wia dashboard and in your `Device` section, click on the `Events` tab and click
` View File` on the `photo` to see the picture
