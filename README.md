# pre

A prerender/prefetch/dns-prefetch jQuery plugin

## Features

* throttles prerender calls to a minimum of once every 500ms
* provides a simple API to create/update link rel="..." elements

## Usage

1. include jQuery and Ben Alman's jquery.ba-throttle-debounce.min.js (http://benalman.com/projects/jquery-throttle-debounce-plugin/)
2. include jquery.pre.js
3. call `$.pre` or `jQuery.pre` in a DOM ready function:

```
$(function() {

  // prerender a page (default type--only need first param)
  $.pre('http://www.example.com/path/to/whatever');

  // prefetch some assets
  $.pre('http://www.example.com/path/to/big.jpg', 'prefetch');
  $.pre('http://www.example.com/path/to/big.css', 'prefetch');

  // dns-prefetch some addresses
  $.pre('//host_name_to_prefetch.com', 'dns-prefetch');
});
```

## Notes

* not tested in jQuery < 2.0
* needs testing...please try it out and post any issues you encounter