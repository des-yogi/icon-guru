document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
function cth(c) {document.documentElement.classList.add(c)}
'ontouchstart' in window?cth('touch'):cth('no-touch');
if(typeof InstallTrigger!=='undefined')cth('firefox');
if(/constructor/i.test(window.HTMLElement)||(function(p){return p.toString()==="[object SafariRemoteNotification]"})(!window['safari']||(typeof safari!=='undefined'&&safari.pushNotification)))cth('safari');
if(/*@cc_on!@*/false||!!document.documentMode)cth('ie');
if(!(/*@cc_on!@*/false||!!document.documentMode)&&!!window.StyleMedia)cth('edge');
if(!!window.chrome&&(!!window.chrome.webstore||!!window.chrome.runtime))cth('chrome');
if(~navigator.appVersion.indexOf("Win"))cth('windows');
if(~navigator.appVersion.indexOf("Mac"))cth('osx');
if(~navigator.appVersion.indexOf("Linux"))cth('linux');

const ready = function (fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

$( document ).ready(function() {
  // code
  $('.dropdown-toggle').dropdown({
    display: 'static'
  });

  $(window).resize(function() {
    if ( $(window).width() >= 768 ) {
      $('.dropdown-toggle').dropdown('dispose');
    }
  });

  var dropdownBtn = document.querySelector('.services .dropdown-toggle');
  var servicesMenuItems = document.querySelectorAll('.tabs__link-wrap');

  Array.prototype.forEach.call(servicesMenuItems, function (item, idx) {
    if (idx === 0) {
      dropdownBtn.innerText = item.querySelector('.tabs__link').innerText;
    }

    item.addEventListener('click', function (e) {
      dropdownBtn.innerText = this.querySelector('.tabs__link').innerText;
    });
  });

});

// (function(){
//   // code
// }());

(function(){
  // code

  var bLazy = new Blazy({
    selector: '.b-lazy'
  });

}());
