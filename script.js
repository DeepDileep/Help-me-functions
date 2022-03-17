'use strict'

const h1 = document.querySelector('h1')
const body = document.querySelector('body')
const button = document.querySelector('button')
const link = document.querySelector('a')

button.addEventListener('click', function(){

    h1.textContent = "You saved me"

    body.style.backgroundColor = "orange"

    link.textContent = "🎆🎆🎆"
})