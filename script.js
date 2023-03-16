// hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  document.body.classList.remove('no-scroll');
}));

// title for speaker section
const spTitle = document.getElementById('sp-title');
spTitle.innerHTML = `
  <div id="spTitle" class="FeTitle d-flex flex-d-column">
                <h3 class="spTitle font">Featured Speakers</h3>
                <div class="line"></div>  
            </div>
  `;
// get all speakers in one array
const allSpeakers = [
  {
    id: '1',
    name: 'Mohsin Ali',
    quali: 'B.Se in Agriculture from Punjab University',
    extra: 'Also got a diploma in Agriculture',
    pic: './img/profiles/person1.jpg',
  },
  {
    id: '2',
    name: 'Muhammad Iqbal',
    quali: 'B.Se in Agriculture from Punjab University',
    extra: 'Also got a diploma in Agriculture',
    pic: './img/profiles/person2.jpeg',
  },
  {
    id: '3',
    name: 'Robina Parveen',
    quali: 'B.Se in Agriculture from Punjab University',
    extra: 'Also got a diploma in Agriculture',
    pic: './img/profiles/person3.jpeg',
  },
  {
    id: '4',
    name: 'Abid Ali',
    quali: 'B.Se in Agriculture from Punjab University',
    extra: 'Also got a diploma in Agriculture',
    pic: './img/profiles/person4.jpeg',
  },
  {
    id: '5',
    name: 'Zeba Khan',
    quali: 'B.Se in Agriculture from Punjab University',
    extra: 'Also got a diploma in Agriculture',
    pic: './img/profiles/person5.jpeg',
  },
  {
    id: '6',
    name: 'Abida Tufail',
    quali: 'B.Se in Agriculture from Punjab University',
    extra: 'Also got a diploma in Agriculture',
    pic: './img/profiles/person6.jpeg',
  },
];

// render all speakers in speaker container
const speakerContainer = document.getElementById('allSpeakers');

allSpeakers.map((speaker) => {
  speakerContainer.innerHTML += ` 
            <div id="${speaker.id} 
                "class="speakerCard  
                  d-flex">
                 <div 
                   class="checker">
                    <img src="${speaker.pic}" alt="SpeakerImage">
                 </div>
                <div  
                 class="spDetail">
                  <h3 class="spName font">${speaker.name}</h3>
                  <p class="spDesc font">${speaker.quali}</p>
                  <div class="spline"></div>
                  <p class="spStudy font">${speaker.extra}</p>
                </div>
             </div>
`;
  return ('');
});

// make button for see more or see less speakers
const cards = document.querySelectorAll('.speakerCard');
const seeMorebtn = document.getElementById('see-more-btn');
const checkWidth = 768;
let isMobile = window.innerWidth < checkWidth;

function toggleCards() {
  for (let i = 2; i < cards.length; i += 1) {
    cards[i].classList.toggle('disapear');
  }
  seeMorebtn.textContent = seeMorebtn.textContent === 'MORE' ? 'LESS' : 'MORE';
}

function handleWindowResize() {
  const newIsMobile = window.innerWidth < checkWidth;
  if (newIsMobile !== isMobile) {
    isMobile = newIsMobile;
    if (isMobile) {
      for (let i = 2; i < cards.length; i += 1) {
        cards[i].classList.add('disapear');
      }
      seeMorebtn.style.display = 'inline-block';
    } else {
      for (let i = 2; i < cards.length; i += 1) {
        cards[i].classList.remove('disapear');
      }
      seeMorebtn.style.display = 'none';
    }
  }
}

window.addEventListener('resize', handleWindowResize);

if (isMobile) {
  for (let i = 2; i < cards.length; i += 1) {
    cards[i].classList.add('disapear');
  }
  seeMorebtn.style.display = 'inline-block';
  seeMorebtn.addEventListener('click', toggleCards);
} else {
  seeMorebtn.style.display = 'none';
}