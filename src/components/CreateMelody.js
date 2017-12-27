import Sequence from './Sequence'

class CreateMelody {
    constructor(events, id, wrap) {
        this.events = events;
        this.id = id;
        this.wrap = wrap;
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
        this.melodyWrap.classList.add('melody--playing')
        this.state.playing = true;
    }

    stopMelody() {
        Tone.Transport.stop();
        
        this.melodyWrap.classList.remove('melody--playing')
        this.state.playing = false;
    }

    _createButton() {
        // create a string with the events
        let text = '<em>[</em>';
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
                text = text + '<span>"' + element + '"</span>';
                if (idx < array.length - 1) {
                    text = text + ', ';
                }
            }
        });
        text = text + '<em>]</em>';

        // Create the melody button
        const wrap = document.getElementById(this.wrap);
        this.melodyWrap = document.createElement('div');
        this.melodyWrap.classList = 'melody';

        this.button = document.createElement('button');
        this.button.classList = 'melody__button';
        this.button.innerHTML = `Melody: <strong>${this.id}</strong>`;

        this.buttonparagraph = document.createElement('p');
        this.buttonparagraph.classList = 'melody__array';
        this.buttonparagraph.innerHTML = text;

        this.melodyWrap.appendChild(this.button);
        this.melodyWrap.appendChild(this.buttonparagraph);
    
        wrap.appendChild(this.melodyWrap);
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