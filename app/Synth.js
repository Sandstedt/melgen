// Create the synth
const Synth = new Tone.Synth({
    oscillator: {
        type: "sine"
    },
    envelope: {
        attack: 0.005,
        decay: 0.1,
        sustain: 0.3,
        release: 4
    }
}).toMaster();

export { Synth }