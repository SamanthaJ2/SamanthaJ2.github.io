const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const aboutMe = document.getElementById('aboutMeLink')
const additionalMedia = document.getElementById('additionalMediaLink')
const projects = document.getElementById('projectsLink')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))

aboutMe.addEventListener('click', () => {
    container.classList.remove('show-nav');
    document.getElementById("projects").style.display = "none";
    document.getElementById("additionalMedia").style.display = "none";
    document.getElementById("aboutMe").style.display = "block";
  
});
projects.addEventListener('click', () => {
    container.classList.remove('show-nav');
    document.getElementById("aboutMe").style.display = "none";
    document.getElementById("additionalMedia").style.display = "none";
    document.getElementById("projects").style.display = "block";
  
});
additionalMedia.addEventListener('click', () => {
    container.classList.remove('show-nav');
    document.getElementById("projects").style.display = "none";
    document.getElementById("aboutMe").style.display = "none";
    document.getElementById("additionalMedia").style.display = "block";
 
});


