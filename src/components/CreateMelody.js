import Sequence from './Sequence'

class CreateMelody {
    constructor(events, id) {
        this.events = events;
        this.id = id;
        this.state = { playing: false }
    }

    // Methods
    playMelody() {
        
        // Clear old sequences
        Tone.Transport.cancel();
        Tone.Transport.emit('cancel');
        
        // Replace the melody sequence
        const sequence = new Sequence(this.events);
        
        Tone.Transport.start();
        this.button.classList.add('melody--playing')
        this.state.playing = true;
    }

    stopMelody() {
        Tone.Transport.stop();
        
        this.button.classList.remove('melody--playing')
        this.state.playing = false;
    }

    _createButton() {
        // create a string with the events
        let text = ' ';
        this.events.forEach((element, idx, array) => {
            // check if current element is an sub-array
            if ( typeof element === 'object') {
                text = text + '<span class="sub-arr">[';

                element.forEach((el, idx, array) => {
                    text = text + '"' + el + '"';
                    if (idx < array.length - 1) {
                        text = text + ', ';
                    }
                });
                text = text + ']</span>';

                if (idx < array.length - 1) {
                    text = text + ', ';
                }

            }
            else {
                text = text + '"' + element + '"';
                if (idx < array.length - 1) {
                    text = text + ', ';
                }
            }
        });

        // Create the melody button
        const wrap = document.getElementById('melodies');
        this.button = document.createElement('div');
        this.button.classList = 'melody';
        this.button.innerHTML = `
        <button class="melody__button">Melody: <strong>${this.id}</strong></button>
        <p class="melody__array">${text}</p>
        `;
    
        wrap.appendChild(this.button);
    }

    _interactions() {
        this.button.addEventListener('click', () => {
            if (this.state.playing) {
                this.stopMelody();
            } else {
                this.playMelody();
            }
        }, false)

        Tone.Transport.on('cancel', () => {
            this.stopMelody();
        })
    }

    init() {
        this._createButton();
        this._interactions();
    }
}



export default CreateMelody