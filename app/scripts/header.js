function toggleSidebar() {

  $("#wrapper").toggleClass("active");
  if ($("#wrapper").hasClass("active")) {
    // attivo menu mobile
    $('#menu-mobile-wrapper').html($('#header-wrapper').html());
    $('#header-wrapper').html($('#header-mobile-wrapper').html());
    $('.header').addClass('mobile-view');

  } else {
    // disattivo menu mobile
    $('#header-wrapper').html($('#menu-mobile-wrapper').html());
    $('#menu-mobile-wrapper').html('');
    $('.header').removeClass('mobile-view');
  }
}
