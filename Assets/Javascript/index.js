const speakersBox = document.getElementById('speakers_box')
const menuBtn = document.getElementById('hamburger_btn')
const menuDisplay = document.getElementById('menu_display')
const moreBtn = document.getElementById('more-btn')
const closeMenuBtn = document.getElementById('close_menu_btn')
const mobileNavbar = document.getElementById('mobile_navbar')
const moreIcon = document.getElementById('more_icon')
const moreBtnText = document.getElementById('more_btn_text')
const body = document.getElementById('body')

let sectionsArray = [];
for (let i = 1; i < 6; i += 1){
   sectionsArray.push(document.getElementById(`sec_${i}`));
}

const speakersObject = [{imgPath: './Assets/Images/Photos/virgilio_martinez.png',
                                    name:'Virgilio Martínez',
                                    activity:'Central restaurant executive chef',
                                    description:'Peruvian chef and restaurateur. He is considered one of the new generation of Peruvian chefs promoting the spread of Peruvian cuisine.',},
                                {imgPath: './Assets/Images/Photos/massimo_bottura.png',
                                name:'Massimo Bottura',
                                activity:' Italian restaurateur and the chef patron of Osteria Francescana',
                                description:" three-Michelin-star restaurant based in Modena, Italy which has been listed in the top 5 at The World's 50 Best Restaurants Awards since 2010 and received top ratings from LEspresso.",},
                                {imgPath: './Assets/Images/Photos/gaston_acurio.png',
                                name:'Gastón Acurio',
                                activity:'Peruvian chef and ambassador of Peruvian cuisine',
                                description:'He owns several restaurants throughout multiple countries and is the author of several books. In Peru, he is the host of his own television program and contributes to a few culinary magazines.',},
                                {imgPath: './Assets/Images/Photos/david_munoz.png',
                                name:'David Muñoz',
                                activity:'Internationally recognised for his cooking and famous restaurants.',
                                description:" His passion for cooking started when he was a child, used to take him frequently to the famous Madrid restaurant Viridiana.",},
                                {imgPath: './Assets/Images/Photos/ferran_adria.png',
                                name:'Ferran Adrià',
                                activity:'Head chef of the elBulli restaurant in Roses on the Costa Brava',
                                description:'Considered one of the best chefs in the world. He has often collaborated with his brother, the renowned pastry chef Albert Adrià.',},
                                {imgPath: './Assets/Images/Photos/gordon_ramsay.png',
                                name:'Gordon Ramsay',
                                activity:'British chef, restaurateur, television personality and writer.',
                                description:'Ramsay is known for his bluntness, as well as fiery temper, strict demeanour, and frequent use of profanity. He combines activities in the television, film, hospitality, and food industries and has promoted and hired various chefs who have apprenticed under his wing.',}]

function create(obj) { return document.createElement(obj); }
function constructor(obj) {
  for (let i = 0; i < obj.length; i += 1) {
    if (obj[i].length === 2) {
      obj[i][0].appendChild(obj[i][1]);
    } else if (obj[i].length === 3) {
      const [a, b, c] = obj[i];
      a.appendChild(b);
      b.className = c;
    } else if (obj[i].length === 4) {
      const [a, b, c, d] = obj[i];
      if (c == null) {
        a.appendChild(b);
        b.innerHTML = d;
      } else {
        a.appendChild(b);
        b.className = c;
        b.innerHTML = d;
      }
    } else if (obj[i].length === 5) {
      const [a, b, c, d, e] = obj[i];
      if (c == null && d == null) {
        a.appendChild(b);
        b.id = e;
      } else if (c == null) {
        a.appendChild(b);
        b.innerHTML = d;
        b.id = e;
      } else if (d == null) {
        obj[i][0].appendChild(b);
        b.className = c;
        b.id = e;
      } else {
        obj[i][0].appendChild(b);
        b.innerHTML = d;
        b.className = c;
        b.id = e;
      }
    }
  }
}
const ElementsArray = [];

for (let i = 0; i < speakersObject.length; i += 1) {
    let boxMainDiv = create('div')
    let photoDiv = create('img')
    let descriptionDiv = create('div')
    let nameH1 = create('h1')
    let activityPh = create ('p')
    let descrPh = create ('p')
    ElementsArray.push([speakersBox,boxMainDiv,'speaker_box'])
    ElementsArray.push([boxMainDiv,photoDiv,'speaker_photo'])
    ElementsArray.push([boxMainDiv,descriptionDiv,'speaker_content'])
    ElementsArray.push([descriptionDiv,nameH1,'speaker_name',speakersObject[i].name])
    ElementsArray.push([descriptionDiv,activityPh,'speaker_activity',speakersObject[i].activity])
    ElementsArray.push([descriptionDiv,descrPh,'speaker_description',speakersObject[i].description])
    photoDiv.src = speakersObject[i].imgPath
    photoDiv.alt = speakersObject[i].name
}
constructor(ElementsArray);

let dropDownState = false
moreBtn.addEventListener('click',(event)=>{
  event.preventDefault();
  if(dropDownState){
    dropDownState = false
    more_icon.style = ""
    more_icon.style = "animation-name: rotate_icon_close;"
    speakersBox.style = "animation-name: close_speakers;"
    setTimeout(()=>{speakersBox.style = '';more_icon.style = "";moreBtnText.innerHTML = "MORE";},950)
  }
  else{
    
    dropDownState = true
    more_icon.style = "animation-name: rotate_icon_open;"
    speakersBox.style = "animation-name: open_speakers;"
    setTimeout(()=>{speakersBox.style = 'height:138vw;';more_icon.style = "transform: rotate(540deg);";moreBtnText.innerHTML = "CLOSE";body.scroll({
      top: 10000,
      behavior: 'smooth'
    });},950)
  }
  
})

menuBtn.addEventListener('click', (event) => {
    event.preventDefault();
    menuDisplay.style = 'display: flex; animation-name: menu_display_anim;';
    for (let i = 0; i < sectionsArray.length; i += 1) {
      sectionsArray[i].style = 'filter: blur(4px); -webkit-filter: blur(1vw);';
    }
    mobileNavbar.style = 'filter: blur(4px); -webkit-filter: blur(1vw);';
  });
  closeMenuBtn.addEventListener('click',(event)=>{
    menuDisplay.style = 'display: flex; animation-name: menu_close_anim;';
    for (let i = 0; i < sectionsArray.length; i += 1) {
      sectionsArray[i].style = '';
    }
    mobileNavbar.style = '';
    setTimeout(()=>{menuDisplay.style = 'display: none;'},480)
  })

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event2) => {
      event2.preventDefault();
      document.querySelector(event2.currentTarget.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
  