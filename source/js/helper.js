(function($){

  // Fancybox support
  $('.post-content').each(function(i){
    $(this).find('img').each(function(){
      if ($(this).parent().attr('data-fancybox') == 'undefined') return;
      console.log(this.attr);
      var imageLink = ($image.attr('data-original')) ? this.getAttribute('data-original') : this.getAttribute('src');
      $imageWrapLink = $image.wrap('<a href="' + imageLink + '"></a>').parent('a');

      $(this).wrap('<a href="' + this.src + '" data-fancybox title="' + alt + '"></a>');
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $.attr('data-fancybox').fancybox();
  }

})(jQuery);