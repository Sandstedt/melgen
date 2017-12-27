if (process.env.NODE_ENV !== 'production') {
    console.log('melgen -  development mode');
}

import GenerateMelodies from './components/GenerateMelodies'

const generateMelodies = new GenerateMelodies({
    items: 24,
    scale: ["C3", "D3", "E#3", "F3", "G3", "A#3"],
    numberOfNotes: 8,
    pauseRatio: 0.7,
    subTonesRatio: 0.3,
    subTonesDivision: 4
});
generateMelodies.create();

// Settings Tone.js
Tone.Transport.bpm.value = 125;