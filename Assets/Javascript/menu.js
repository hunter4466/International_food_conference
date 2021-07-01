const menuBtn = document.getElementById('hamburger_btn')
const menuDisplay = document.getElementById('menu_display')
const mobileNavbar = document.getElementById('mobile_navbar')
const closeMenuBtn = document.getElementById('close_menu_btn')
let aTags = document.querySelectorAll(".md-link")

let sectionsArray = document.querySelectorAll("section")
console.log(sectionsArray)
menuBtn.addEventListener('click', (event) => {
    event.preventDefault();
    menuDisplay.style = 'display: flex; animation-name: menu_display_anim;';

      sectionsArray.forEach((element)=>{element.style = 'animation-name: blur_open; animation-duration: 0.5s; filter: blur(4px); -webkit-filter: blur(1vw);'});
    
    mobileNavbar.style = 'filter: blur(4px); -webkit-filter: blur(1vw);';
  });

  closeMenuBtn.addEventListener('click',(event)=>{
    event.preventDefault();
      menuDisplay.style = 'display: flex; animation-name: menu_close_anim;';
    mobileNavbar.style = '';
    setTimeout(()=>{menuDisplay.style = 'display: none;'; sectionsArray.forEach((element)=>{element.style = 'animation-name: blur_close; animation-duration: 0.5s;'});},480)
  })

aTags.forEach((element)=>{element.addEventListener('click',(event)=>{
    event.preventDefault();
    menuDisplay.style = 'display: flex; animation-name: menu_close_anim;';
  mobileNavbar.style = '';
  setTimeout(()=>{menuDisplay.style = 'display: none;'; sectionsArray.forEach((element)=>{element.style = 'animation-name: blur_close; animation-duration: 0.5s;'});},480)
})})