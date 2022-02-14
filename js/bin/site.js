

$(document).ready(function() {
    $('.navSection').load('/Shared/_navbar.html');
    $('.footerSection').load('/Shared/_footer.html');
    $('.parallax').parallax();
    $('dropdown-trigger').dropdown();
    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
});

$(document).on('focus','.sidenav-trigger',function(){
    $('.sidenav').sidenav();
});