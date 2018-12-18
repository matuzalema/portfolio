/*----------Arrow Animate-----------*/

$(".arrow").on("click", function(){
	$("body, html").animate({
		scrollTop: $("main").offset().top
	}, 1200)
});
/*----------Show more about me-----------*/
const showButton = document.getElementById('more');
var aboutMeMore = document.getElementById("aboutMeMore");

function showMore(){
 
  if (aboutMeMore.style.display === "block"){
      aboutMeMore.style.display = "none";
  }
  else{
      aboutMeMore.style.display = "block";
  }
}

function showMoreButton(){
  if(aboutMeMore.style.display === "block"){
    showButton.style.display = "none";
  }
  else{
    showButton.style.display = "block"};
}

showButton.addEventListener ('click',showMore);
showButton.addEventListener('click', showMoreButton);


/*----------Animate items-----------*/
window.sr = ScrollReveal();
    sr.reveal('p', {
     
        delay: 500,
        distance: 0,
        duration: 2000,
        mobile: true
    });

  sr.reveal('.projects', {
      
        delay: 500,
        mobile: true,
        duration: 2000
    });
  sr.reveal('input', {
      
        delay: 500,
        mobile: true,
        duration: 2000
    });

  sr.reveal('textarea', {
      
        delay: 500,
        mobile: true,
        duration: 2000
    });

  /*-------------drop down menu----------*/
const dropDown = document.getElementById('bar');

 function dropDownMenu() {
    document.getElementById("site-menu").classList.toggle("show");
}
dropDown.onclick = dropDownMenu;




window.onclick = function(event) {
  if (!event.target.matches('#bar')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

    /*--------------validate name---------------------*/
var submit = document.getElementById('submit');

var namesField = document.getElementById('name');

namesField.addEventListener('blur', function(e){
  var validationsName = document.getElementById('validationName');
  var inputValue = namesField.value.length;
  var namesReg = new RegExp('[a-zA-Z]');

  if (inputValue<3 || !namesReg.test(namesField.value)){
    validationsName.innerHTML = 'Wpisz poprawnie imię i nazwisko';
    return false;
  }
  else{
    validationsName.innerHTML = '';
    return true;
  }
});

    /*--------------validate email---------------------*/

var emailField = document.getElementById('email');

emailField.addEventListener('blur', function(e){
  var validationEmail = document.getElementById('validationEmail');
  var mailReg = new RegExp('^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$', 'gi');

  if (!mailReg.test(emailField.value)){
    validationEmail.innerHTML = 'Adres email jest nieprawidłowy.';
    return false;
  }
  else{
    validationEmail.innerHTML = '';
    return true;
  }
});

    /*--------------validate textarea---------------------*/

var textField = document.getElementById('content');

textField.addEventListener('change', function(e){
  var validationsText = document.getElementById('validationText');
  var inputValue = textField.value.length;

  if (inputValue<10){
    validationsText.innerHTML = 'Wpisz wiadomość';
    return false;
  }
  else{
    validationsText.innerHTML = '';
    return true;
  }
});

/*--------------scroll site---------------------*/

$(document).ready(function() {
    $('a[href^="#"]').click(function() {
        var hash = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1500);
        return false;
    });
});

