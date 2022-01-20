var darkMode = document.getElementById('darkMode');

var darkLabel = "darkModeLabel";
// var darkLang = "Dark";
// var lightLang = "Light";
// fa-moon
var imgID = "logo";
var darkImg = "images/dark_logo.png";
var lightImg = "images/logo.png";

window.addEventListener('load', function () {
  if (darkMode) {
    initTheme();
    darkMode.addEventListener('change', function () {
      resetTheme();
    });
  }
});

function initTheme() {
  var darkThemeSelected = localStorage.getItem('darkMode') !== null && localStorage.getItem('darkMode') === 'dark';
  darkMode.checked = darkThemeSelected;
  darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
  darkThemeSelected ? document.getElementById(imgID).src = darkImg : document.getElementById(imgID).src = lightImg;
  darkThemeSelected ? $('#darkModeLabel i').addClass('fa-moon') : $('#darkModeLabel i').addClass('fa-sun');
  // darkThemeSelected ? document.getElementById(darkLabel).innerHTML = darkLang : document.getElementById(darkLabel).innerHTML = lightLang;
  darkThemeSelected ? $('.navbar').addClass('navbar-dark') : $('.navbar').removeClass('navbar-light');
  darkThemeSelected ? $('#postgresqlIcon').attr('src', "images/dark_postgresql.png") : $('#postgresqlIcon').attr('src', "images/postgresql.png");
  darkThemeSelected ? $('#aiogramIcon').attr('src', "images/dark_aiogram.png") : $('#aiogramIcon').attr('src', "images/aiogram.png");
}

function resetTheme() {
  if (darkMode.checked) {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('darkMode', 'dark');
    document.getElementById(imgID).src = darkImg;
    // document.getElementById(darkLabel).innerHTML = darkLang;
    $('.navbar').removeClass('navbar-light');
    $('.navbar').addClass('navbar-dark');

    $('#darkModeLabel i').addClass('fa-moon');
    $('#darkModeLabel i').removeClass('fa-sun');
    $('#postgresqlIcon').attr('src', "images/dark_postgresql.png");
    $('#aiogramIcon').attr('src', "images/dark_aiogram.png");
  } else {
    document.body.removeAttribute('data-theme');
    localStorage.removeItem('darkMode');
    document.getElementById(imgID).src = lightImg;
    // document.getElementById(darkLabel).innerHTML = lightLang;
    $('.navbar').removeClass('navbar-dark');
    $('.navbar').addClass('navbar-light');

    $('#darkModeLabel i').addClass('fa-sun');
    $('#darkModeLabel i').removeClass('fa-moon');
    $('#postgresqlIcon').attr('src', "images/postgresql.png");
    $('#aiogramIcon').attr('src', "images/aiogram.png");
  }
}
