/* Copyright 2013 Chris Wilson

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

window.AudioContext = window.AudioContext || window.webkitAudioContext;

var audioContext = new AudioContext();
var audioInput = null,
    realAudioInput = null,
    inputPoint = null,
    audioRecorder = null;
var rafID = null;
var analyserContext = null;
var canvasWidth, canvasHeight;
var recIndex = 0;
var buf1 = [], buf2 = [], buf3=[], buf4=[], buf5=[], buf6=[];
var recordFlag1 = true;
/* TODO:

- offer mono option
- "Monitor input" switch
*/

function saveAudio() {
    audioRecorder.exportWAV( doneEncoding );
    // could get mono instead by saying
    // audioRecorder.exportMonoWAV( doneEncoding );
}

// function RecordOrPlay(thisThing){
//     if(recordFlag1){
//         toggleRecording(thisThing);
//     }else{
//         audioRecorder.getBufferCallback( buf1);
//         recordFlag1 = true;
//     }
// }

// function CheckStopRecord(thisThing){
//     if(!recordFlag1){
//         toggleRecording(thisThing);
//     }
// }

function gotBuffers( buffers ) {
    var canvas = document.getElementById( "wavedisplay" );

    //drawBuffer( canvas.width, canvas.height, canvas.getContext('2d'), buffers[0] );

    // the ONLY time gotBuffers is called is right after a new recording is completed - 
    // so here's where we should set up the download.
    buf1 = buffers;
    //audioRecorder.getBufferCallback( buf1);
    audioRecorder.exportWAV( doneEncoding );
}

function gotBuffers2( buffers ) {
    var canvas = document.getElementById( "wavedisplay2" );

    //drawBuffer( canvas.width, canvas.height, canvas.getContext('2d'), buffers[0] );

    // the ONLY time gotBuffers is called is right after a new recording is completed - 
    // so here's where we should set up the download.
    buf2=buffers;
    //audioRecorder2.getBufferCallback( buf2);
    audioRecorder.exportWAV( doneEncoding );
}
function gotBuffers3( buffers ) {
    var canvas = document.getElementById( "wavedisplay2" );

    //drawBuffer( canvas.width, canvas.height, canvas.getContext('2d'), buffers[0] );

    // the ONLY time gotBuffers is called is right after a new recording is completed - 
    // so here's where we should set up the download.
    buf3=buffers;
    // audioRecorder3.getBufferCallback( buf3);
    audioRecorder.exportWAV( doneEncoding );
}function gotBuffers4( buffers ) {
    var canvas = document.getElementById( "wavedisplay2" );

    //drawBuffer( canvas.width, canvas.height, canvas.getContext('2d'), buffers[0] );

    // the ONLY time gotBuffers is called is right after a new recording is completed - 
    // so here's where we should set up the download.
    buf4=buffers;
    // audioRecorder4.getBufferCallback( buf4);
    audioRecorder.exportWAV( doneEncoding );
}function gotBuffers5( buffers ) {
    var canvas = document.getElementById( "wavedisplay2" );

    //drawBuffer( canvas.width, canvas.height, canvas.getContext('2d'), buffers[0] );

    // the ONLY time gotBuffers is called is right after a new recording is completed - 
    // so here's where we should set up the download.
    buf5=buffers;
    // audioRecorder5.getBufferCallback( buf5);
    audioRecorder.exportWAV( doneEncoding );
}function gotBuffers6( buffers ) {
    var canvas = document.getElementById( "wavedisplay2" );

    //drawBuffer( canvas.width, canvas.height, canvas.getContext('2d'), buffers[0] );

    // the ONLY time gotBuffers is called is right after a new recording is completed - 
    // so here's where we should set up the download.
    buf6=buffers;
    // audioRecorder6.getBufferCallback( buf6);
    audioRecorder.exportWAV( doneEncoding );
}
function doneEncoding( blob ) {
    Recorder.setupDownload( blob, "myRecording" + ((recIndex<10)?"0":"") + recIndex + ".wav" );
    recIndex++;
}

function toggleRecording( e ) {
    if (e.classList.contains("recording")) {
        // stop recording
        audioRecorder.stop();
        e.classList.remove("recording");
        audioRecorder.getBuffers( gotBuffers );
        document.getElementById("play1").style.display = 'inline';

    } else {
        // start recording
        if (!audioRecorder)
            return;
        recordFlag1 = false;
        e.classList.add("recording");
        audioRecorder.clear();
        audioRecorder.record();

    }
}

function toggleRecording2( e ) {
    if (e.classList.contains("recording")) {
        // stop recording
        audioRecorder2.stop();
        e.classList.remove("recording");
        audioRecorder2.getBuffers2( gotBuffers2 );
        document.getElementById("play2").style.display = 'inline';
    } else {
        // start recording
        if (!audioRecorder2)
            return;
        e.classList.add("recording");
        audioRecorder2.clear();
        audioRecorder2.record();

    }
}

function toggleRecording3( e ) {
    if (e.classList.contains("recording")) {
        // stop recording
        audioRecorder3.stop();
        e.classList.remove("recording");
        audioRecorder3.getBuffers3( gotBuffers3 );
        document.getElementById("play3").style.display = 'inline';
    } else {
        // start recording
        if (!audioRecorder3)
            return;
        e.classList.add("recording");
        audioRecorder3.clear();
        audioRecorder3.record();

    }
}

function toggleRecording4( e ) {
    if (e.classList.contains("recording")) {
        // stop recording
        audioRecorder4.stop();
        e.classList.remove("recording");
        audioRecorder4.getBuffers4( gotBuffers4 );
        document.getElementById("play4").style.display = 'inline';
    } else {
        // start recording
        if (!audioRecorder4)
            return;
        e.classList.add("recording");
        audioRecorder4.clear();
        audioRecorder4.record();

    }
}

function toggleRecording5( e ) {
    if (e.classList.contains("recording")) {
        // stop recording
        audioRecorder5.stop();
        e.classList.remove("recording");
        audioRecorder5.getBuffers5( gotBuffers5 );
        document.getElementById("play5").style.display = 'inline';
    } else {
        // start recording
        if (!audioRecorder5)
            return;
        e.classList.add("recording");
        audioRecorder5.clear();
        audioRecorder5.record();

    }
}

function toggleRecording6( e ) {
    if (e.classList.contains("recording")) {
        // stop recording
        audioRecorder6.stop();
        e.classList.remove("recording");
        audioRecorder6.getBuffers6( gotBuffers6 );
        document.getElementById("play6").style.display = 'inline';
    } else {
        // start recording
        if (!audioRecorder6)
            return;
        e.classList.add("recording");
        audioRecorder6.clear();
        audioRecorder6.record();

    }
}

function convertToMono( input ) {
    var splitter = audioContext.createChannelSplitter(2);
    var merger = audioContext.createChannelMerger(2);

    input.connect( splitter );
    splitter.connect( merger, 0, 0 );
    splitter.connect( merger, 0, 1 );
    return merger;
}

function cancelAnalyserUpdates() {
    window.cancelAnimationFrame( rafID );
    rafID = null;
}

function updateAnalysers(time) {
    if (!analyserContext) {
        var canvas = document.getElementById("analyser");
        canvasWidth = canvas.width;
        canvasHeight = canvas.height;
        analyserContext = canvas.getContext('2d');
    }

    // analyzer draw code here
    {
        var SPACING = 3;
        var BAR_WIDTH = 1;
        var numBars = Math.round(canvasWidth / SPACING);
        var freqByteData = new Uint8Array(analyserNode.frequencyBinCount);

        analyserNode.getByteFrequencyData(freqByteData); 

        analyserContext.clearRect(0, 0, canvasWidth, canvasHeight);
        analyserContext.fillStyle = '#F6D565';
        analyserContext.lineCap = 'round';
        var multiplier = analyserNode.frequencyBinCount / numBars;

        // Draw rectangle for each frequency bin.
        for (var i = 0; i < numBars; ++i) {
            var magnitude = 0;
            var offset = Math.floor( i * multiplier );
            // gotta sum/average the block, or we miss narrow-bandwidth spikes
            for (var j = 0; j< multiplier; j++)
                magnitude += freqByteData[offset + j];
            magnitude = magnitude / multiplier;
            var magnitude2 = freqByteData[i * multiplier];
            analyserContext.fillStyle = "hsl( " + Math.round((i*360)/numBars) + ", 100%, 50%)";
            analyserContext.fillRect(i * SPACING, canvasHeight, BAR_WIDTH, -magnitude);
        }
    }
    
    rafID = window.requestAnimationFrame( updateAnalysers );
}

function toggleMono() {
    if (audioInput != realAudioInput) {
        audioInput.disconnect();
        realAudioInput.disconnect();
        audioInput = realAudioInput;
    } else {
        realAudioInput.disconnect();
        audioInput = convertToMono( realAudioInput );
    }

    audioInput.connect(inputPoint);
}

function gotStream(stream) {
    inputPoint = audioContext.createGain();

    // Create an AudioNode from the stream.
    realAudioInput = audioContext.createMediaStreamSource(stream);
    audioInput = realAudioInput;
    audioInput.connect(inputPoint);

//    audioInput = convertToMono( input );

    analyserNode = audioContext.createAnalyser();
    analyserNode.fftSize = 2048;
    inputPoint.connect( analyserNode );

    audioRecorder = new Recorder( inputPoint );
    audioRecorder2 = new Recorder( inputPoint );

    audioRecorder3 = new Recorder( inputPoint );
    audioRecorder4 = new Recorder( inputPoint );
    audioRecorder5 = new Recorder( inputPoint );
    audioRecorder6 = new Recorder( inputPoint );

    zeroGain = audioContext.createGain();
    zeroGain.gain.value = 0.0;
    inputPoint.connect( zeroGain );
    zeroGain.connect( audioContext.destination );
    updateAnalysers();
}

function initAudio() {
        if (!navigator.getUserMedia)
            navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        if (!navigator.cancelAnimationFrame)
            navigator.cancelAnimationFrame = navigator.webkitCancelAnimationFrame || navigator.mozCancelAnimationFrame;
        if (!navigator.requestAnimationFrame)
            navigator.requestAnimationFrame = navigator.webkitRequestAnimationFrame || navigator.mozRequestAnimationFrame;

    navigator.getUserMedia({audio:true}, gotStream, function(e) {
            alert('Error getting audio');
            console.log(e);
        });
}

window.addEventListener('load', initAudio );
