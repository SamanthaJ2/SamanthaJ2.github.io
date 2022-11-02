const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const aboutMe = document.getElementById('aboutMeLink')
const additionalMedia = document.getElementById('additionalMediaLink')
const projects = document.getElementById('projectsLink')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))

aboutMe.addEventListener('click', () => container.classList.remove('show-nav'))

projects.addEventListener('click', () => container.classList.remove('show-nav'))


additionalMedia.addEventListener('click', () => container.classList.remove('show-nav'))

