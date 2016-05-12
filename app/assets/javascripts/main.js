$(document).ready(function(){
var audio;
//--------------
// Audio Object
//--------------
  audio = {
    buffer: {},
    compatibility: {},
    files: [
        '/assets/drum.1.1.mp3',
        '/assets/drum.1.2.mp3',
        '/assets/drum.1.3.mp3',
        '/assets/drum.1.4.mp3',
        '/assets/drum.1.5.mp3',
        '/assets/drum.1.6.mp3',
        '/assets/bass.1.1.mp3',
        '/assets/bass.1.2.mp3',
        '/assets/bass.1.3.mp3',
        '/assets/bass.1.4.mp3',
        '/assets/bass.1.5.mp3',
        '/assets/bass.1.6.mp3',
        '/assets/sounds.1.1.mp3',
        '/assets/sounds.1.2.mp3',
        '/assets/sounds.1.3.mp3',
        '/assets/sounds.1.4.mp3',
        '/assets/sounds.1.5.mp3',
        '/assets/sounds.1.6.mp3',
        '/assets/sounds.1.7.mp3',
        '/assets/sounds.1.8.mp3',
        '/assets/sounds.1.9.mp3',
        '/assets/sounds.1.10.mp3',
        '/assets/sounds.1.11.mp3',
        '/assets/sounds.1.12.mp3'

    ],
    proceed: true,
    source_loop: {},
    source_once: {}
};

//-----------------
// Audio Functions
//-----------------
audio.findSync = function(n) {
    var first = 0,
        current = 0,
        offset = 0;

    // Find the audio source with the earliest startTime to sync all others to
    for (var i in audio.source_loop) {
      // console.log('audio source loop =' + audio.source_loop._playing);
        current = audio.source_loop[i]._startTime;
        if (current > 0) {
            if (current < first || first === 0) {
                first = current;
            }
        }
    }

    if (audio.context.currentTime > first) {
        offset = (audio.context.currentTime - first) % audio.buffer[n].duration;
    }

    return offset;
};

audio.play = function(n) {
        $('#loop-' + n).addClass('clicked');
        $('#loop-' + n).addClass('disco');
        $('#loop-' + n).addClass('loopQueuer');
        for (var i = 0; i < allCellsInCanvas.length; i++) {
          var cell = allCellsInCanvas[i];
          cell['name']='disco';
        }
        nextLoop = ('#loop-' + n);
        // $('#loop-' + n).addClass('animated pulse');

    if (audio.source_loop[n]._playing) {
        $('#loop-' + n).removeClass('clicked');
        for (var i = 0; i < allCellsInCanvas.length; i++) {
          var cell = allCellsInCanvas[i];
          cell['name']='';
        }
        // $('#loop-' + n).removeClass('animated pulse');
        audio.stop(n);
    } else {
        audio.source_loop[n] = audio.context.createBufferSource();
        audio.source_loop[n].buffer = audio.buffer[n];
        audio.source_loop[n].loop = true;
        audio.source_loop[n].connect(audio.context.destination);

        var offset = audio.findSync(n);
        audio.source_loop[n]._startTime = audio.context.currentTime - offset;
            audio.source_loop[n][audio.compatibility.start](0, offset);
            console.log('offset = ' + offset);
            console.log(audio.context.currentTime);
        // }

        audio.source_loop[n]._playing = true;
    }

};

audio.stop = function(n) {
    if (audio.source_loop[n]._playing) {
        audio.source_loop[n][audio.compatibility.stop](0);
        audio.source_loop[n]._playing = false;
        audio.source_loop[n]._startTime = 0;
        // if (audio.compatibility.start === 'noteOn') {
        //     audio.source_once[n][audio.compatibility.stop](0);
        // }
    }
};

//-----------------------------
// Check Web Audio API Support
//-----------------------------
try {
    // More info at http://caniuse.com/#feat=audio-api
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    audio.context = new window.AudioContext();
} catch(e) {
    audio.proceed = false;
    alert('Web Audio API not supported in this browser.');
}

if (audio.proceed) {
    //---------------
    // Compatibility
    //---------------
    (function() {
        var start = 'start',
            stop = 'stop',
            buffer = audio.context.createBufferSource();
        if (typeof buffer.start !== 'function') {
            start = 'noteOn';
        }
        audio.compatibility.start = start;

        if (typeof buffer.stop !== 'function') {
            stop = 'noteOff';
        }
        audio.compatibility.stop = stop;
    })();

    //-------------------------------
    // Setup Audio Files and Buttons
    //-------------------------------
    for (var a in audio.files) {
        (function() {
            var i = parseInt(a) + 1;
            var req = new XMLHttpRequest();
            req.open('GET', audio.files[i - 1], true); // array starts with 0 hence the -1
            req.responseType = 'arraybuffer';
            req.onload = function() {
                audio.context.decodeAudioData(
                    req.response,
                    function(buffer) {
                        audio.buffer[i] = buffer;
                        audio.source_loop[i] = {};
                        var play = document.getElementById('loop-' + i);
                        var dataValue = $('#loop-' + i).data('value');
                        play.addEventListener('click', function(e) {
                          var clickedCanvas = $(this);
                          var canvasData = clickedCanvas.data().value;

                        // console.log('request' + req.response);
                          // if(($.find('.sounds.clicked').length >= 4) && $(this).hasClass('sound')){
                          //   $('#loop-' + n).removeClass('clicked');
                          //   audio.stop(n);
                          // }
                          if($(this).hasClass('sounds')){
                              if (($.find('.sounds.clicked').length >= 4)) {

                                  $(this).removeClass('clicked');

                                  audio.stop(canvasData);
                              } else {
                                audio.play(dataValue);
                              }
                          }

                          if($(this).hasClass('bass')){
                              if (($.find('.bass.clicked').length >= 2)) {

                                  $(this).removeClass('clicked');

                                  audio.stop(canvasData);
                              } else {
                                audio.play(dataValue);
                              }
                          }

                          if($(this).hasClass('beats')){
                              if (($.find('.beats.clicked').length >= 2)) {

                                  $(this).removeClass('clicked');

                                  audio.stop(canvasData);
                              } else {
                                audio.play(dataValue);
                              }
                          }

                          // else if(($.find('.sounds.clicked').length < 4)){
                          //   audio.play(dataValue);
                          // }
                          // // else{
                          // //   audio.play(dataValue);
                          // // }
                          // // if(($.find('.bass.clicked').length >= 2)){
                          // //   return;
                          // // }
                          // // if(($.find('.beats.clicked').length >= 2)){
                          // //   return;
                          // // }
                                                  // audio.play(dataValue);

                                                  //else{
                                                  //   console.log(offset);
                                                  // }
                        });
                    },
                    function() {
                        console.log('Error decoding audio "' + audio.files[i - 1] + '".');
                    }
                );
            };
            req.send();
        })();
    }
}


//////////Queueing Hell////////////////////////////
// var loopsInQueue = [];
// var scheduleLoops = function(n, time){
//   loopsInQueue.push({loops: n, time: time});
//
//   if(offset === 0){
//     //play loopsInQueue
//   }else{
//     //wait
//   }
// };
///////////////////////////////////////////////////
// var analyse = function(){
//     debugger;
//   sound.connect(analyser);
//
// sound.connect(context.destination);
//
// processor.onaudioprocess = function() {
//     /* Populate the data array with the frequency data. */
//     analyser.getByteTimeDomainData(data);
//     analyser.getByteFrequencyData(data);
//     console.log(data);
// };
// };
});
