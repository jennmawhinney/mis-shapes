// $(document).ready(function() {
//   var context,
//       source,
//       buffer,
//       url = "";
//
//   // Initialise the Audio Context
//   function init() {
//       if (typeof AudioContext !== "undefined") {
//           context = new AudioContext();
//       } else if (typeof webkitAudioContext !== "undefined") {
//           context = new webkitAudioContext();
//       } else {
//           throw new Error('Sorry, AudioContext is not supported.');
//       }
//   }
//
// // This helper loads sound buffers
// var noise = function(div, name, length) {
//
// var sounds = {}; // Memoization hash
//
// var soundFiles = 'ambition_beat arpeggio_bass bailey_background bass big_maracas chord_foundation conga_flam conga_house conga cool_bass dance_floor delayed_octave fat_bass four_beat grainy_beat piano rainy_day wilder_bass'.split(' ');
// for (var i = 0; i < soundFiles.length; i++) {
//     playSound(soundFiles[i], true);
// }
// function playSound(sound, silent) {
//
//     if (! sounds[sound]) {
//         // Note: this will load asynchronouslys
//         var request = new XMLHttpRequest();
//         request.open("GET", "/assets/" + sound + ".mp3", true);
//         request.responseType = "arraybuffer"; // Read as binary data
//
//         // Asynchronous callback
//         request.onload = function() {
//             var data = request.response;
//             sounds[sound] = data;
//             if (! silent) {
//                 audioRouting(sounds[sound]);
//             }
//         };
//
//         request.send();
//     } else {
//         if (! silent) {
//             audioRouting(sounds[sound]);
//         }
//     }
//     console.log("showing fetched sounds", sounds);
// }
//
// function audioRouting(data) {
//     context.decodeAudioData(data, function(buffer){
//         source = context.createBufferSource(); // Create sound source
//         myBuffer = buffer;
//         source.buffer = myBuffer; // Add buffered data to object
//         source.connect(context.destination); // Connect sound source to output
//         source.start(0); //Important line to get the sound to play!
//     }); // Create source buffer from raw binary
//     //source.connect(gain);
// }
//
// //     var noise = function(div, name, length) {
// //       // debugger;
// //       // mediaRecorder.start(0);
// //
// //       $(div).removeClass("clicked").addClass("clicked");
// //       var sound = new Howl({
// //         urls: ['../sounds/' + name + '.m4a'],
// //         sprite: {
// //           [name]: [0, length]
// //         },
// //         loop: true
// //       });
// //       sound.play(name);
// //     };
// //
// //     var mediaConstraints = {
// //     audio: true
// // };
// //
//   // $('#a').on('click', function(event) {
//   //   event.preventDefault();
//   //   noise('#a', 'conga', 4000);
//   // });
//   //
//   // $('#b').on('click', function(event) {
//   //   event.preventDefault();
//   //   noise('#b', 'ambition_beat', 8000);
//   // });
//   //
//   // $('#c').on('click', function(event) {
//   //   event.preventDefault();
//   //   noise('#c', 'big_maracas', 4000);
//   // });
//   //
//   // $('#d').on('click', function(event) {
//   //   event.preventDefault();
//   //   noise('#d', 'conga_flam', 4000);
//   // });
//   //
//   // $('#e').on('click', function(event) {
//   //   event.preventDefault();
//   //   noise('#e', 'conga_house', 4000);
//   // });
//   //
//   // // $('#f').on('click', function() {
//   // //   noise('#f', 'arpeggio_bass', 8000);
//   // // });
//   //
//   // // $('#g').on('click', function() {
//   // //   noise('#g', 'bass', 4000);
//   // // });
//   //
//   // $('#h').on('click', function(event) {
//   //   event.preventDefault();
//   //   noise('#h', 'cool_bass', 4000);
//   // });
//   //
//   // $('#i').on('click', function(event) {
//   //   event.preventDefault();
//   //   noise('#i', 'dance_floor', 4000);
//   // });
//   //
//   // $('#j').on('click', function(event) {
//   //   event.preventDefault();
//   //   noise('#j', 'fat_bass', 8000);
//   // });
//   //
//   // $('#k').on('click', function(event) {
//   //   event.preventDefault();
//   //   noise('#k', 'wilder_bass', 8000);
//   // });
//   //
//   // $('#l').on('click', function(event) {
//   //   event.preventDefault();
//   //   noise('#l', 'bailey_background', 4000);
//   // });
//   //
//   // $('#m').on('click', function(event) {
//   //   event.preventDefault();
//   //   noise('#m', 'chord_foundation', 4000);
//   // });
//   //
//   // $('#n').on('click', function(event) {
//   //   event.preventDefault();
//   //   noise('#n', 'piano', 4000);
//   // });
//   //
//   // $('#o').on('click', function(event) {
//   //   event.preventDefault();
//   //   noise('#m', 'rainy_day', 3900);
//   // });
// };
// });
