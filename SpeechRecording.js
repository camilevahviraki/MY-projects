import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const SpeechRecording = () => {
const { transcript, resetTranscript } = useSpeechRecognition()
if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
return null
}
return (
<div>
<button onClick={SpeechRecognition.startListening}>Start</button>
<button onClick={SpeechRecognition.stopListening}>Stop</button>
<button onClick={resetTranscript}>Reset</button>
<p>{transcript}</p>
</div>
)
}
export default SpeechRecording

