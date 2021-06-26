import m from 'mithril'
import quiz from './quiz/quiz'

const app = {
    view() {
        return m('div', { class: 'app-container' }, [
            m('header', m('h3', 'Ear Training')),
            m(quiz),
        ])
    },
}
export default app
