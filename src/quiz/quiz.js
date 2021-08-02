import m from 'mithril'
import * as Tone from 'tone'
import { sampleSize } from 'lodash'
import choice from './choice'
import { audioPlayerType, getAudioChoices } from './audioPlayer'

function quiz() {
    const { sounds, octave } = getAudioChoices(audioPlayerType.single_note)
    const playedNote = `${sampleSize(sounds, 1)}${octave}`
    let isPlaying = false
    const synth = new Tone.Synth().toDestination()
    function togglePlay() {
        if (isPlaying) {
            synth.triggerRelease()
        } else {
            synth.triggerAttack(playedNote, Tone.now())
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
                            onclick: () => togglePlay(),
                        }),
                        m('div', { class: 'quiz-choice' }, [
                            m(choice, { label: sounds[0] }),
                            m(choice, { label: sounds[1] }),
                            m(choice, { label: sounds[2] }),
                            m(choice, { label: sounds[3] }),
                        ]),
                    ]
                ),
            ])
        },
    }
}

export default quiz
