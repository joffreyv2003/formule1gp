(function() {
    "use strict";
  
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }

    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)
  
    const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight
  
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }
  
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)
  
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()
  
        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)
  
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash)
        }
      }
    });
  
  })()

var myVar;

function loading() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("website").style.display = "block";
}

let timer = document.getElementById("timer");

let countDownDate = new Date("Aug 27, 2023 00:00:01").getTime();

// Run deze code aan het begin zodat wanneer je op de pagina komt dat je neit 1 seconden hoeft te wachten voordat je de tijd ziet.
// Krijg de datum van vandaag/tijd
var now = new Date().getTime();

// Bereken het verschil tussen de 2 datums
var distance = countDownDate - now;

// doe alle berekeningen
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// verander de elemnt naar de uitgerekende tijden
timer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

// update de countdown elke seconden
let counter = setInterval(function () {
  // Krijg de datum van vandaag/tijd
  var now = new Date().getTime();

  // Bereken het verschil tussen de 2 datums
  var distance = countDownDate - now;

  // doe alle berekeningen
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // verander de elemnt naar de uitgerekende tijden
  timer.innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000); // 1000 miliseconden is gelijk aan 1 seconden

// BUTTONS
function redirect() {
  window.location.href = "https://www.youtube.com/watch?v=2M0inetghnk"
}

function buttonAlert() {
  window.alert("U bent niet bevoegd om een account aan te maken!");
}
