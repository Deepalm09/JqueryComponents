$(document).ready(function(){

$('.openmodale').click(function (e) {
	
         e.preventDefault();
         $('.modale').addClass('opened');
    });
$('.closemodale').click(function (e) {
         e.preventDefault();
         $('.modale').removeClass('opened');
    });
});




// function classToggle() {
  // const navs = document.querySelectorAll('.Navbar__Items')
  
  // navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
// }

// document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);

