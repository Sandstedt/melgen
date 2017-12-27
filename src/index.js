if (process.env.NODE_ENV !== 'production') {
    console.log('melgen -  development mode');
}
import CreateMelody from './components/CreateMelody';

// Settings Tone.js
Tone.Transport.bpm.value = 125;

let scale = ["C3", "D3", "E3", "F3", "G3", "A3", "B3", "", "", "", "", "", "", ""]

// Help functions
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Create melodies
for (let index = 0; index < 24; index++ ) {
    
    // result that I want to get:
    // ["C3", "", ["E3", "", "D3", "", "E3", "",], "G3", ["A3", "G3"]]

    let melody = [];

    // random number of notes - minimum of 3 - max 10
    let numberOfNotes = random(6, 16);

    // create an array with the number of notes
    for (let i = 0; i < numberOfNotes; i++) {
        // Get a random tone from the scale
        melody.push(scale[Math.floor(Math.random() * scale.length)]);
    }
    console.log(melody );

    new CreateMelody(melody, index).init();
}