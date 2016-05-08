$(document).ready(function() {

//   // var count;
// $('.container').on('click', function(){
//   movePlayhead();
// });
//
// var movePlayhead = function(){
//   var clock = new WAAClock(audioContext);
//   clock.start();
//   debugger;
//   var startTime = context.currentTime;
//   var tempo = 120; // BPM (beats per minute)
//   var quarterNoteTime = 60 / tempo;
//   $('playhead').animate({
//
// });
// };
//   var metronome = function(count){
//     // debugger;
//     count = 1;
//     for (var i = 0; i < count.length; i++) {
//
//       count++;
//     }
//     if(count === 1){
//       $('.count').removeClass('blink');
//       $('#1').addClass('blink');
//   } else if(count === 2){
//       $('.count').removeClass('blink');
//       $('#2').addClass('blink');
//     } else if(count === 3){
//       $('.count').removeClass('blink');
//       $('#3').addClass('blink');
//     } else if(count === 4){
//       $('.count').removeClass('blink');
//       $('#4').addClass('blink');
//       count = 1;
//     }
//     };
//   metronome(4);

    var noise = function(div, name, length) {
      // debugger;
      // mediaRecorder.start(0);

      $(div).removeClass("clicked").addClass("clicked");
      var sound = new Howl({
        urls: ['assets/' + name + '.m4a'],
        sprite: {
          [name]: [0, length]
        },
        loop: true
      });
      sound.play(name);
    };

    var mediaConstraints = {
    audio: true
};

  $('#a').on('click', function(event) {
    event.preventDefault();
    noise('#a', 'conga', 4000);
  });

  $('#b').on('click', function(event) {
    event.preventDefault();
    noise('#b', 'ambition_beat', 8000);
  });

  $('#c').on('click', function(event) {
    event.preventDefault();
    noise('#c', 'big_maracas', 4000);
  });

  $('#d').on('click', function(event) {
    event.preventDefault();
    noise('#d', 'conga_flam', 4000);
  });

  $('#e').on('click', function(event) {
    event.preventDefault();
    noise('#e', 'conga_house', 4000);
  });

  // $('#f').on('click', function() {
  //   noise('#f', 'arpeggio_bass', 8000);
  // });

  // $('#g').on('click', function() {
  //   noise('#g', 'bass', 4000);
  // });

  $('#h').on('click', function(event) {
    event.preventDefault();
    noise('#h', 'cool_bass', 4000);
  });

  $('#i').on('click', function(event) {
    event.preventDefault();
    noise('#i', 'dance_floor', 4000);
  });

  $('#j').on('click', function(event) {
    event.preventDefault();
    noise('#j', 'fat_bass', 8000);
  });

  $('#k').on('click', function(event) {
    event.preventDefault();
    noise('#k', 'wilder_bass', 8000);
  });

  $('#l').on('click', function(event) {
    event.preventDefault();
    noise('#l', 'bailey_background', 4000);
  });

  $('#m').on('click', function(event) {
    event.preventDefault();
    noise('#m', 'chord_foundation', 4000);
  });

  $('#n').on('click', function(event) {
    event.preventDefault();
    noise('#n', 'piano', 4000);
  });

  $('#o').on('click', function(event) {
    event.preventDefault();
    noise('#m', 'rainy_day', 3900);
  });
});//closes document.ready

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
