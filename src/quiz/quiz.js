import m from 'mithril'
import * as Tone from 'tone'
import choice from './choice'
import { audioPlayerType, getAudioChoices } from './audioPlayer'

function quiz() {
    const audioChoices = getAudioChoices(audioPlayerType.single_note)
    const note = `${audioChoices.sounds[0]}${audioChoices.octave}`
    let isPlaying = false
    const synth = new Tone.Synth().toDestination()
    function togglePlay() {
        if (isPlaying) {
            synth.triggerRelease()
        } else {
            synth.triggerAttack(note, Tone.now())
        }
        isPlaying = !isPlaying
    }
    return {
        view() {
            return m('div', { class: 'quiz-container' }, [
                m(
                    'div',
                    {
                        class: 'quiz',
                    },
                    [
                        m('i', {
                            class: isPlaying
                                ? 'fa fa-pause-circle play-icon'
                                : 'fa fa-play-circle play-icon',
                            onclick: async () => {
                                await Tone.start()
                                togglePlay(note)
                            },
                        }),
                        m('div', { class: 'quiz-choice' }, [
                            m(choice),
                            m(choice),
                            m(choice),
                            m(choice),
                        ]),
                    ]
                ),
            ])
        },
    }
}

export default quiz
