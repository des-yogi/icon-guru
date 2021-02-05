// document.addEventListener('DOMContentLoaded', function(){});
// (function(){
// код
// }());

(function(){
  var $grid = $('.grid').imagesLoaded( function() {
  // init Masonry after all images have loaded
    $grid.masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
  });
}());

(function(){
  // init Masonry
  // var $grid = $('.grid').masonry({
  //   itemSelector: '.grid-item',
  //   columnWidth: '.grid-sizer',
  //   percentPosition: true
  // });
  // layout Masonry after each image loads
  // $grid.imagesLoaded().progress( function() {
  //   $grid.masonry('layout');
  // });
}());
