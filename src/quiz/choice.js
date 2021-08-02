import m from 'mithril'

function choice(props) {
    return {
        view() {
            return m('button', { class: 'choice' }, props.attrs.label)
        },
    }
}

export default choice
