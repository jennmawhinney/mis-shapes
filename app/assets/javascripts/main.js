$(document).ready(function(){
//--------------
// Audio Object
//--------------
var audio = {
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
      // debugger;
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
    console.log(offset +'from within findSync');
};

audio.play = function(n) {
        $('#loop-' + n).addClass('clicked');
        $('#loop-' + n).addClass('loopQueuer');
        nextLoop = ('#loop-' + n);
    if (audio.source_loop[n]._playing) {
        $('#loop-' + n).removeClass('clicked');
        audio.stop(n);
    } else {
        audio.source_loop[n] = audio.context.createBufferSource();
        audio.source_loop[n].buffer = audio.buffer[n];
        audio.source_loop[n].loop = true;
        audio.source_loop[n].connect(audio.context.destination);

        ////////////Create Buffer Source for Audio Viz/////////////
        // fft = ctx.createAnalyser();
        // fft.fftSize = samples;
        // console.log(samples);
        //////////////////////////////////////////////////////////

        var offset = audio.findSync(n);
        audio.source_loop[n]._startTime = audio.context.currentTime - offset;
          // console.log(offset);
        if (audio.compatibility.start === 'noteOn') {
          console.log('noteOn = ' + noteOn);
            //check for compatability
            audio.source_once[n] = audio.context.createBufferSource();
            audio.source_once[n].buffer = audio.buffer[n];
            audio.source_once[n].connect(audio.context.destination);
            audio.source_once[n].noteGrainOn(0, offset, audio.buffer[n].duration - offset);
            /*
            Note about the third parameter of noteGrainOn().
            If your sound is 10 seconds long, your offset 5 and duration 5 then you'll get what you expect.
            If your sound is 10 seconds long, your offset 5 and duration 10 then the sound will play from the start instead of the offset.
            */
            // Now queue up our looping sound to start immediatly after the source_once audio plays.

            audio.source_loop[n][audio.compatibility.start](audio.context.currentTime + (audio.buffer[n].duration - offset));
        } else {
            audio.source_loop[n][audio.compatibility.start](0, offset);
            console.log('offset = ' + offset);
            console.log(audio.context.currentTime);
        }

        audio.source_loop[n]._playing = true;
    }
};

audio.stop = function(n) {
    if (audio.source_loop[n]._playing) {
        audio.source_loop[n][audio.compatibility.stop](0);
        audio.source_loop[n]._playing = false;
        audio.source_loop[n]._startTime = 0;
        if (audio.compatibility.start === 'noteOn') {
            audio.source_once[n][audio.compatibility.stop](0);
        }
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
                        // console.log('clicked');
                        // superDisco();
                        // console.log('disco?');
                        // if($(dataValue).hasClass('clicked') && offset === 0){
                        audio.play(dataValue);
                      // }else{
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
