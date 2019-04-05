// JavaScript Document
const init = ($ = jQuery) => {
  $(function() {
    'use strict';
    $('#toggle-menu').click(function() {
      $(this).toggleClass('xoay');
      $('nav#the-menu, #overlay-page').toggleClass('show');
      $('#searchgia').slideUp(250);

      $('#men')
        .unbind('click')
        .click(async function() {
          $('#m').slideToggle(250);
          $('#searchgia').slideUp(250);
        });

      $('#woman')
        .unbind('click')
        .on('click', function() {
          $('#w').slideToggle(250);
          $('#searchgia').slideUp(250);
        });

      $('#col')
        .unbind('click')
        .on('click', function() {
          $('#c').slideToggle(250);
          $('#searchgia').slideUp(250);
        });
    });

    $(
      'nav#the-menu ul #m li,nav#the-menu ul #w li,nav#the-menu ul #col li, #up'
    ).click(function() {
      $('#toggle-menu').removeClass('xoay');
      $('nav#the-menu, #overlay-page').removeClass('show');
    });

    $('#overlay-page').click(function() {
      $('#toggle-menu').removeClass('xoay');
      $('nav#the-menu, #overlay-page').removeClass('show');
    });
  });

  $(function() {
    'use strict';
    $('#srch').click(function() {
      $('#searchgia').slideToggle(300);
      $('#m').slideUp(250);
      $('#w').slideUp(250);
      $('#c').slideUp(250);
      $('#toggle-menu').removeClass('xoay');
      $('nav#the-menu, #overlay-page').removeClass('show');
    });
  });
};
export { init };
