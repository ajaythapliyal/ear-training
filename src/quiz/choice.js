import m from 'mithril'
// import * as Tone from 'tone'

const choice = {
    view() {
        return m(
            'button',
            {
                class: 'choice',
                // onclick: async () => {
                //     await Tone.start()
                //     const synth = new Tone.Synth().toDestination()
                //     synth.triggerAttack('c#4', Tone.now())
                // },
            },
            'c#'
        )
    },
}

export default choice
