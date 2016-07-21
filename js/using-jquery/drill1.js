$(function(){


    console.log('The dom is ready! (drill 1)');

    $('.shape').on('click', function (){
      $('.shape').fadeOut('slow', function(){
      var wide = $('.stage').width();
      var high = $('.stage').height();
      var wideMult = Math.random() * wide;
      var highMult = Math.random() * high;
      $('.shape').css({'top': highMult, 'left' : wideMult });
      $('.shape').fadeIn('slow');
      });
    });


});

