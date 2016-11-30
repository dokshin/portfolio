(function() {
  'use strict';

  var interactiveButton = $('.site-header-switch-interactive'),
      consoleButton = $('.site-header-switch-console');

  interactiveButton.click(function () {
    interactiveButton.toggleClass('site-header-button-visible');
    setTimeout(function() {
      consoleButton.toggleClass('site-header-button-visible');
    }, 1000);

  })

  consoleButton.click(function () {
    consoleButton.toggleClass('site-header-button-visible');
    setTimeout(function() {
      interactiveButton.toggleClass('site-header-button-visible');
    }, 1000);

  })
}())
