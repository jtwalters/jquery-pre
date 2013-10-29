/*
 *  pre - v1.0.0-alpha
 *  prerender/prefect/dns-prefetch helper
 *  https://github.com/jtwalters/pre
 *
 *  Made by Joel Walters
 *  Under MIT License
 */
/*!
 * Requires Ben Alman's throttle/debounce script (http://benalman.com/projects/jquery-throttle-debounce-plugin/)
 */
;(function(defaults, $, window, document, undefined) {
  'use strict';

  // (private) method: prerender
  // Insert or update <link rel="prerender" href="...">
  var prerender = function(href) {
    var $link = $('link[rel="prerender"]');

    // create a link element if it doesn't exist already
    if ($link.length === 0) {
      $link = $('<link rel="prerender">');
      $('head').append($link);
    }

    // update the href attribute
    $link.attr('href', href);

  };

  var throttled_prerender = $.throttle(500, true, prerender);

  // method: jQuery.pre
  // Adds a link tag with specified href, type (defaults to prerender)
  // Usage: $.pre("http://www.example.com/path/to/whatever", "prefetch")
  $.pre = function(href, type) {
    type = type || defaults.type;
    if (typeof href == 'undefined') {
      return;
    }
    if (type == 'prerender') {
      throttled_prerender(href);
    }
    else {
      var $link = $('<link>');
      $link.attr('rel', type);
      $link.attr('href', href);
      $('head').append($link);
    }
  };

})({
  // defaults go here
  type: 'prerender'
}, jQuery, window, document);