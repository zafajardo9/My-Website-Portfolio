new fullpage('#fullPage', {
  //menu: '#menu',
  navigation: true,
  autoScrolling: true,
  showActiveTooltip: true,
  scrollingSpeed: 1500,
  controlArrows: false,
  slidesNavigation: true,
  verticalCentered: false,
  slidesNavPosition: 'bottom',
  anchors: ['firstPage', 'Skills','Portfolio', 'Contact'],

});



$(function(){
  $('.carousel-item').eq(0).addClass('active');
  var total = $('.carousel-item').length;
  var current = 0;
  $('#moveRight').on('click', function(){
    var next=current;
    current= current+1;
    setSlide(next, current);
  });
  $('#moveLeft').on('click', function(){
    var prev=current;
    current = current- 1;
    setSlide(prev, current);
  });
  function setSlide(prev, next){
    var slide= current;
    if(next>total-1){
     slide=0;
      current=0;
    }
    if(next<0){
      slide=total - 1;
      current=total - 1;
    }
           $('.carousel-item').eq(prev).removeClass('active');
           $('.carousel-item').eq(slide).addClass('active');
      setTimeout(function(){

      },800);
    

    
    console.log('current '+current);
    console.log('prev '+prev);
  }
});


window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

// CURSOR

let mouseCursor = document.querySelector(".cursor");
let content = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, .card, .fab ");


window.addEventListener('mousemove', cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

content.forEach(link=>{
  link.addEventListener('mouseover', ()=>{
    mouseCursor.classList.add('link-grow');
  });

  link.addEventListener('mouseleave', ()=>{
    mouseCursor.classList.remove('link-grow');
  })

});


//INTRO BOIL
const textIntro = document.getElementById("textIntro");



const tl = new TimelineLite();
tl.set("#hide", {color: "#fffee", fontSize: "5rem"}, 1.5)
.to("#hide",1,{color: "#2d3548", fontSize: "3rem", stagger: 0.3, x: "300"});


tl.to(".slider",{y: "-100%", backgroundColor: "#1d2d50", duration:1.5, delay: 0.5});

tl.to(textIntro,{y: "-100%", backgroundColor: "#000"}, "-=1");
tl.fromTo(".side-text",{opacity: 0},{opacity: 1, duration: 1});
tl.fromTo(".skillBar",{opacity: 0, x: "-500%"},{opacity: 1, duration: 1, x: "0%"});
//End of




