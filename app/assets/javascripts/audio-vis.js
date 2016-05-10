var ctx; //audio context
var buf; //audio buffer
var fft; //fft audio node
var samples = 128;
var setup = false; //indicate if audio is set up yet


//init the sound system
// function init() {
//     console.log("in init");
//     try {
//         ctx = new webkitAudioContext(); //is there a better API for this?
//         setupCanvas();
//         loadFile();
//     } catch(e) {
//         alert('you need webaudio support' + e);
//     }
// }
// window.addEventListener('load',init,false);
//
// //load the mp3 file
// function loadFile() {
//     var req = new XMLHttpRequest();
//     req.open("GET","music.mp3",true);
//     //we can't use jquery because we need the arraybuffer type
//     req.responseType = "arraybuffer";
//     req.onload = function() {
//         //decode the loaded data
//         ctx.decodeAudioData(req.response, function(buffer) {
//             buf = buffer;
//             play();
//         });
//     };
//     req.send();
// }
