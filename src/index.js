import GenerateMelodies from './components/GenerateMelodies';
import CreateMelody from './components/CreateMelody';

if (process.env.NODE_ENV !== 'production') {
    console.log('melgen -  development mode');
}
// Settings Tone.js
Tone.Transport.bpm.value = 125;

// Generate all melodies
const generateMelodies = new GenerateMelodies({
    items: 24,
    scale: ["C3", "D3", "E#3", "F3", "G3", "A#3"],
    numberOfNotes: 8,
    pauseRatio: 0.7,
    subTonesRatio: 0.3,
    subTonesDivision: 4
});
generateMelodies.create();

// Let the user create a custom melody
const customInput = document.getElementById('custom-melody-input');
const customButton = document.getElementById('custom-melody-generate');
customButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (customInput.value == '') {
        customInput.classList.add('error');
        console.error('Not a valid array');
        return;
    } else {
        customInput.classList.remove('error');
        let customMelodyArr = JSON.parse(customInput.value);
        new CreateMelody(customMelodyArr, 'custom', 'custom-melody').init();
    }
}, false);
