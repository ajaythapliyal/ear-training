import { range, sampleSize } from 'lodash'
import teoria from 'teoria'

export const audioPlayerType = {
    single_note: 'single_note',
}

const midiRange = range(36, 83)

function getRandomOctave() {
    return sampleSize([3, 4], 1)[0]
}

function getRandomNotes(number = 1) {
    const numberNormalized = number > 12 ? 12 : number
    const rootNote = teoria.note.fromMIDI(sampleSize(midiRange, 1))
    const chromaticScale = rootNote.scale('chromatic').simple()
    const randomNotes = sampleSize(chromaticScale, numberNormalized)
    return {
        sounds: randomNotes,
        octave: getRandomOctave(),
    }
}

const audioPlayerFactory = {
    single_note: getRandomNotes,
}

export function getAudioChoices(type, numberOfChoice = 4) {
    return audioPlayerFactory[type](numberOfChoice)
}
