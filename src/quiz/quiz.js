import m from 'mithril'
import * as Tone from 'tone'
import { sampleSize } from 'lodash'
import choice from './choice'
import { audioPlayerType, getAudioChoices } from './audioPlayer'

function quiz() {
    let { sounds, octave } = getAudioChoices(audioPlayerType.single_note)
    let playedSound = sampleSize(sounds, 1)[0]
    let isPlaying = false
    const synth = new Tone.Synth().toDestination()

    function togglePlay() {
        if (isPlaying) {
            synth.triggerRelease()
        } else {
            synth.triggerAttack(`${playedSound}${octave}`, Tone.now())
        }
        isPlaying = !isPlaying
    }

    function resetQuiz() {
        const audioChoices = getAudioChoices(audioPlayerType.single_note)
        sounds = audioChoices.sounds
        octave = audioChoices.octave
        playedSound = sampleSize(sounds, 1)
        if (isPlaying) {
            synth.triggerRelease()
            synth.triggerAttack(`${playedSound}${octave}`, Tone.now())
        }
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
                            m(choice, {
                                label: sounds[0],
                                resetQuiz,
                                playedSound,
                            }),
                            m(choice, {
                                label: sounds[1],
                                resetQuiz,
                                playedSound,
                            }),
                            m(choice, {
                                label: sounds[2],
                                resetQuiz,
                                playedSound,
                            }),
                            m(choice, {
                                label: sounds[3],
                                resetQuiz,
                                playedSound,
                            }),
                        ]),
                    ]
                ),
            ])
        },
    }
}

export default quiz
