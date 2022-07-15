const navbar = document.querySelector('.header .flex .navbar');
const profile = document.querySelector('.header .flex .profile');
const menuBtn = document.querySelector('#menu-btn');
const userBtn = document.querySelector('#user-btn');
const linkBtn = document.querySelectorAll('.linkBtn');

linkBtn.forEach(function(e, i){
  e.addEventListener('click', function(){
    navbar.classList.remove('active');
  });
});

menuBtn.onclick = () =>{
   navbar.classList.toggle('active');
   // profile.classList.remove('active');
}

userBtn.onclick = () =>{
   profile.classList.toggle('active');
   navbar.classList.remove('active');
}

// window.onscroll = () =>{
//    const navbar = document.querySelector('.header .flex .navbar');
//    const profile = document.querySelector('.header .flex .profile');
//    profile.classList.remove('active');
//    navbar.classList.remove('active');
// }

function loader(){
   document.querySelector('.loader').style.display = 'none';
}

function fadeOut(){
   setInterval(loader, 2000);
}

window.onload = fadeOut;