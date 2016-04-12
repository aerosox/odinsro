//ROUTES
// ** logout
riot.route.start(true);

//event to listen when widget has finished loading data
var widgetLoaded = new Event('widgetLoaded');
var charLoaded = new Event('charLoaded');

//preloader to use everywhere
var preloader = '<div class="preloader-wrapper big active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>';
var element = '.autotrade, .profile';
function preLoader(element, preloader) {
  $(element).children().hide();
  $(element).append(preloader).show();
  $( window ).on('widgetLoaded',function() {
    // Handler for .load() called.
    $('.preloader-wrapper').remove();
    $(element).children().show();
    console.log(element);
  });
  
}



$(document).ready(function(){

  // ROUTES
  riot.route('', function() {
    view.render('home');
    //remove container from header
    $('.main-menu').addClass('container');
  });

  riot.route('profile', function() {
    view.render('profile');
    //remove container from header
    $('.main-menu').removeClass('container');
  });

  riot.route('download', function() {
    view.render('download');
  });

  riot.route('server-info', function() {
    view.render('server-info');
  });

  riot.route('rank', function() {
    view.render('rank');
    $('.main-menu').removeClass('container');
  });

  riot.route('login', function() {
    view.render('login', 'modal');
    $('#modal1').openModal();
  });

  riot.route('pass-recover', function() {
    view.render('pass-recover', 'modal');
  });
  
  riot.route('register', function() {
    view.render('register', 'modal');
    $('#modal2').openModal();
  });
  
  riot.route('logout', function() {
    $.api.logout();
    riot.route('');
  });

});
