import m from 'mithril'
import choice from './choice'

const quiz = {
    view() {
        return m('div', { class: 'quiz-container' }, [
            m('div', { class: 'quiz' }, [
                m('i', { class: 'fa fa-play play-icon' }),
                // m('div', { class: 'quiz-choice' }, [
                //     m(choice),
                //     m(choice),
                //     m(choice),
                //     m(choice),
                // ]),
            ]),
        ])

        // return m('div', { class: 'quiz-container' }, [
        //     m('div', { class: 'quiz' }, [
        //         m('i', { class: 'fa fa-play fa-6x play-icon' }),
        //         [m(choice), m(choice)],
        //     ]),
        // ])
    },
}

export default quiz
