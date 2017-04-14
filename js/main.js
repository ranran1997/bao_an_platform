;(function(){
  $('.view-wrap-table tr:nth-child(2n+3)').addClass('dark')
  $('.map-btn').click(function(){
    var wrap = $(this).parents('.view-wrap')
    var map = $(this).parent('.map')
    var info = $(this).parent('.map').next('.info')
    wrap.toggleClass('has-corner')
    if(info.css('right') !== '0px'){
      map.before('<div class="shine v-center"><div>')
      info.animate({'right':'0'},500,'swing');
      map.animate({'width':'80%'},500,'swing');
    }else{
      wrap.find('.shine').remove()
      info.animate({'right':'-20%'},500,'swing');
      map.animate({'width':'100%'},500,'swing');
    }
  })
})()