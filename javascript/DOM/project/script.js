const text = document.getElementById('text')
const btn = document.getElementById('btn')

let isTrue = true
btn.addEventListener('click', () => {
    if(isTrue) {
        text.style.backgroundColor = 'black'
        text.style.color = 'white'
        btn.textContent = 'Change bgcolor to white'
        isTrue = false
    }
    else{
        text.style.backgroundColor = 'white'
        text.style.color = 'black'
        btn.textContent = 'Change bgcolor to black'
        isTrue = true
    }
})