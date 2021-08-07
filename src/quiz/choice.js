import m from 'mithril'

function choice() {
    return {
        view(vnode) {
            const { label } = vnode.attrs
            return m(
                'button',
                {
                    class: 'choice',
                    onclick: () => {
                        vnode.attrs.resetQuiz()
                    },
                },
                label
            )
        },
    }
}

export default choice
