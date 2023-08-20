const para = document.getElementById('para')
        const selector = document.getElementById('selector')
        const btn = document.getElementById("btn")
        const Usertxt = document.getElementById('User-text')
        selector.addEventListener('change', () => {
            const selectorType = selector.value
            para.style.fontFamily = selectorType
            Usertxt.style.fontFamily = selectorType

        })
        btn.addEventListener('click', () => {
            const input = document.getElementById('input')
            const usertext = document.getElementById('User-text')
            para.style.fontFamily=input.value
            usertext.style.fontFamily = input.value
        })