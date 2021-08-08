import m from 'mithril'

function choice() {
    return {
        view(vnode) {
            const {
                label,
                isCorrect,
                resetQuiz,
                revealChoice,
                isRevealChoice,
            } = vnode.attrs

            function getChoiceStyle() {
                if (isRevealChoice && isCorrect) {
                    return 'choice-succ'
                }
                if (isRevealChoice && !isCorrect) {
                    return 'choice-fail'
                }
                return 'choice'
            }
            return m(
                'button',
                {
                    class: getChoiceStyle(),
                    onclick: () => {
                        revealChoice()
                        m.redraw()
                        setTimeout(() => {
                            resetQuiz()
                            m.redraw()
                        }, 1000)
                    },
                },
                label
            )
        },
    }
}

export default choice
