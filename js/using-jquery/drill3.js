$(function(){


    console.log('The dom is ready! (drill 3)');
    $('div.shape').hover(function () {
      $(this).css({'background-color': 'blue'});
      console.log(this);
      $(this).removeClass('ball');
      console.log(this);
    }, function () {
      $(this).css({'background-color': 'green'});
      $(this).addClass('ball');
    }
    );


});

