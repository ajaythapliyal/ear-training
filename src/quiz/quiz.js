import m from 'mithril'

const quiz = {
    view() {
        return m('div', { class: 'quiz-container' }, [
            m('div', { class: 'quiz' }, [
                m('div', [m('i', { class: 'fa fa-play fa-6x play-icon' })]),
            ]),
        ])
    },
}

export default quiz
