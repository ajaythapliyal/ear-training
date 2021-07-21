import m from 'mithril'
import choice from './choice'

const quiz = {
    view() {
        return m('div', { class: 'quiz-container' }, [
            m('div', { class: 'quiz' }, [
                m('i', { class: 'fa fa-play-circle play-icon' }),
                m('div', { class: 'quiz-choice' }, [
                    m(choice),
                    m(choice),
                    m(choice),
                    m(choice),
                ]),
            ]),
        ])
    },
}

export default quiz
