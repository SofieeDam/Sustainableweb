const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarKnapper = document.getElementsByClassName('navbar-knapper') [0]

toggleButton.addEventListener('click',() => {
    navbarKnapper.classList.toggle('active')
})