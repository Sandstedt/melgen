import CreateMelody from './CreateMelody';
import random from '../common/helpers';

class GenerateMelodies {
    constructor(settings) {
        // How many melodies that should be generated
        this.items = settings.items;

        // The tones to use for the melody generation
        this.scale = settings.scale;

        // The note vs pause ratio
        this.pauseRatio = settings.pauseRatio;

        // The number of 8ts. 8 is one bar, 16 is 2 bars.
        this.numberOfNotes = settings.numberOfNotes;

        // The ratio how many faster subdivided tones it should be
        this.subTonesRatio = settings.subTonesRatio;

        // The number of subtone divisions - like 8ths or 16ths
        this.subTonesDivision = settings.subTonesDivision;

        
    }

    create() {
        // Create melodies
        for (let index = 0; index < this.items; index++) {

            // result that I want to get:
            // ["C3", "", ["E3", "", "D3", "", "E3", "",], "G3", ["A3", "G3"]]

            let melody = [];

            // create an array with the number of notes
            for (let i = 0; i < this.numberOfNotes; i++) {

                if (Math.random() > this.subTonesRatio) {
                    // create a sub-array
                    let subArr = [];
                    for (let sub = 0; sub < this.subTonesDivision; sub++) {
                        let noteToPush = random(0, this.scale.length - 1);
                        if ( Math.random() < this.pauseRatio) {
                            // create a pause
                            subArr.push("");
                        } else {
                            subArr.push(this.scale[noteToPush]);
                        }
                    }
                    melody.push(subArr);

                } else {
                    // create a single tone
                    // get a random tone from the scale
                    if (Math.random() < this.pauseRatio) {
                        // create a pause
                        melody.push("");
                    } else {
                        melody.push(this.scale[random(0, this.scale.length - 1)]);
                    }
                }

                
            }

            new CreateMelody(melody, index).init();
        }
    }
}
export default GenerateMelodies