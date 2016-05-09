// $(document).ready(function() {
//
//   var loopArray = [];
//   window.AudioContext = window.AudioContext || window.webkitAudioContext;
//   context = new AudioContext();
//
// var audioCtx = new AudioContext();
// console.log(audioCtx.currentTime);
//
// $(document).on("click", function() {
//   console.log(audioCtx.currentTime);
// });
//
// var noise = function(div, name, length) {
//     // mediaRecorder.start(0);
//   // $(div).removeClass("clicked").addClass("clicked");
//   var sound = new Howl({
//     urls: ['/assets/' + name + '.mp3'],
//     sprite: {
//       [name]: [0, length]
//     },
//     loop: false
//   });
//   //   if($(div).hasClass("clicked")){
//   //     $(div).removeClass("clicked");
//   //   } else {
//   //   $(div).addClass("clicked");
//   // }
//   //   if ($(div).hasClass('clicked', function(){
//   loopArray.push([name]);
//   setInterval(function(time) {
//     for (var i = 0; i < loopArray.length; i++) {
//         sound.play(loopArray[i]);
//       }
//   } , 4350);
// // }));
//
// var mediaConstraints = {
// audio: true
// };
// };
//
//
// $('#a').on('click', function(event) {
//   event.preventDefault();
//   noise('#a', 'drum.1.1', 4350);
// });
//
// $('#b').on('click', function(event) {
//   event.preventDefault();
//   noise('#b', 'drum.1.2', 4350);
// });
//
// $('#c').on('click', function(event) {
//   event.preventDefault();
//   noise('#c', 'drum.1.3', 4350);
// });
//
// $('#d').on('click', function(event) {
//   event.preventDefault();
//   noise('#d', 'drum.1.4', 4350);
// });
//
// $('#e').on('click', function(event) {
//   event.preventDefault();
//   noise('#e', 'sounds.1.1', 4350);
// });
//
// // $('#f').on('click', function() {
// //   noise('#f', 'arpeggio_bass', 4350);
// // });
//
// // $('#g').on('click', function() {
// //   noise('#g', 'bass', 4000);
// // });
//
// $('#h').on('click', function(event) {
//   event.preventDefault();
//   noise('#h', 'sounds.1.2', 4350);
// });
//
// $('#i').on('click', function(event) {
//   event.preventDefault();
//   noise('#i', 'sounds.1.3', 4350);
// });
//
// $('#j').on('click', function(event) {
//   event.preventDefault();
//   noise('#j', 'sounds.1.4', 4350);
// });
//
// $('#k').on('click', function(event) {
//   event.preventDefault();
//   noise('#k', 'bass.1.1', 4350);
// });
//
// $('#l').on('click', function(event) {
//   event.preventDefault();
//   noise('#l', 'bass.1.2', 4350);
// });
//
// $('#m').on('click', function(event) {
//   event.preventDefault();
//   noise('#m', 'bass.1.3', 4350);
// });
//
// $('#n').on('click', function(event) {
//   event.preventDefault();
//   noise('#n', 'bass.1.4', 4350);
// });
//
// $('#o').on('click', function(event) {
//   event.preventDefault();
//   noise('#m', 'sounds.1.5', 4350);
// });
//
// // init();
// // });//closes document.ready
//
// $('#e').on('click', function() {
//   noise('conga_house', 4000);
// });
//
// $('#e').on('click', function() {
//   noise('conga_house', 4000);
// });
//
// $('#e').on('click', function() {
//   noise('conga_house', 4000);
// });
// });
