(function($){

  // Fancybox support
  $('.pocontent').each(function(i){
    console.log('post')
    $(this).find('img').each(function(i){
      if ($(this).parent().attr('data-fancybox')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

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