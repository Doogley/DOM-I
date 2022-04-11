const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')



//header
const header = document.querySelector('header');
const links = document.querySelectorAll('header nav a');
//const headerImage = document.querySelector('img');

//console.log(links);
const navLinks = Object.values(siteContent.nav);

links.forEach((link, index) => {
  link.textContent = navLinks[index];
  link.classList.add('italic');
});

//Main content (top h4)
const topContent = document.querySelector('.top-content');
const h4Top = topContent.querySelectorAll('h4');

h4Top[0].textContent = siteContent['main-content']['features-h4'];
h4Top[1].textContent = siteContent['main-content']['about-h4'];

//Main content (top p's)

const pTop = topContent.querySelectorAll('p');

pTop[0].textContent = siteContent['main-content']['features-content'];
pTop[1].textContent = siteContent['main-content']['about-content']


//Main content (bottom h4)

const bottomContent = document.querySelector('.bottom-content');
const h4Bot = bottomContent.querySelectorAll('h4');

h4Bot[0].textContent = siteContent['main-content']['services-h4'];
h4Bot[1].textContent = siteContent['main-content']['product-h4'];
h4Bot[2].textContent = siteContent['main-content']['vision-h4'];

//Main content (bottom p's)

const pBot = bottomContent.querySelectorAll('p');

pBot[0].textContent = siteContent['main-content']['services-content'];
pBot[1].textContent = siteContent['main-content']['product-content'];
pBot[2].textContent = siteContent['main-content']['vision-content'];

//Footer (contact section)

const botContact = document.querySelector('.contact');
const botContactH4 = botContact.querySelector('h4');
const botContactAdd = botContact.querySelectorAll('p')
botContactH4.textContent = siteContent['contact']['contact-h4'];
botContactAdd[0].textContent = siteContent['contact']['address'];
botContactAdd[1].textContent = siteContent['contact']['phone'];
botContactAdd[2].textContent = siteContent['contact']['email'];

//H1

const headerMain = document.querySelector('h1');
headerMain.textContent = siteContent['cta']['h1'];

//Get started button

const startButton = document.querySelector('button');
startButton.textContent = siteContent['cta']['button'];

//CopyRight

const copyR = document.querySelector('footer a');
copyR.textContent = siteContent['footer']['copyright'];

//Images

// header.querySelector('img').src = siteContent['images']['logo-img']
const logoImg = document.querySelector('#logo-img');
logoImg.src = siteContent.images['logo-img'];
const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.images['cta-img'];
const accentImg = document.querySelector('#middle-img');
accentImg.src = siteContent.images['accent-img'];


