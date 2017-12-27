// Create the synth
const synth = new Tone.Synth({
    "partials": [0, 2, 3, 4]
}).toMaster();

// const synth = new Tone.Synth({
//     oscillator: {
//         type: "sine"
//     },
//     envelope: {
//         attack: 0.005,
//         decay: 0.1,
//         sustain: 0.1,
//         release: 4
//     }
// }).toMaster();



export default synth