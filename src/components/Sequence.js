import synth from './synth';

class Sequence {
    constructor(events) {
        this.sequence = new Tone.Sequence(
            // callback   
            function (time, note) {
                synth.triggerAttackRelease(note);
            },
            events
        ).start(0);
    }
}

export default Sequence;