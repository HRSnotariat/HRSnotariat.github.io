$(document).ready(function() {
  $('a.menu').click(function() {
    $('.site-header nav').slideToggle(100);
    return false;
  });

  $(window).resize(function(){
    var w = $(window).width();
    var menu = $('.site-header nav');
    if(w > 680 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('article.post iframe').wrap('<div class="video-container" />');

});

$(function(){
  $('<img>').attr('src',function(){
      var imgUrl = $('div.featured-image').css('background-image');
      if (!imgUrl) {
        return;
      }
      var urlre = /url\([\"\']?(.*?)[\"\']?\)/;
      imgUrl = imgUrl.match(urlre);
      if($.isArray(imgUrl)) {
        imgUrl = imgUrl[1]; // Captured subexpression.
      }
      return imgUrl;
  }).load(function(){
    $('img.loading').fadeOut(500);
    $('div.overlay').fadeTo("slow", 0.6);
  });
});
