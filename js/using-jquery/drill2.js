$(function(){


    console.log('The dom is ready! (drill 2)');
      var height = $('.stage').height();
      var width = $('.stage').width();
      height = height - 100;
      width = width - 100;
    $(document).on('keyup',function(event){
        //output to console which key was pressed
        var position = $('.shape').position();
        var top = position.top;
        var left = position.left;
        var move = 0;
        console.log('The user pressed key: ' , event.which);
        switch(event.which){

          case 37: // left
            if(left - 120 < 0) {
              move = left - 0;
              $('.shape').animate({'left': left - move});
            } else {
            $('.shape').animate({'left': left - 120});
            }
          break;

          case 38: // up
            if(top - 120 < 0) {
              move = top - 0;
              $('.shape').animate({'top': top - move});
            } else {
            $('.shape').animate({'top': top - 120});
            }
          break;

          case 39: // right
            if(left + 120 >= width) {
              move = width - left;
              $('.shape').animate({'left': left + move});
            } else {
              $('.shape').animate({'left': left + 120});
            }
          break;

          case 40: // down
            if(top + 120 > height) {
              move = height - top;
              $('.shape').animate({'top': top + move});
            } else {
              $('.shape').animate({'top': top + 120});
            }
          break;

          case 83: // s
            $('.shape').animate({'top': top + 2}, 1);
            $('.shape').animate({'top': top - 2}, 1);
            $('.shape').animate({'top': top + 2}, 1);
            $('.shape').animate({'top': top - 2}, 1);
            $('.shape').animate({'top': top + 2}, 1);
            $('.shape').animate({'top': top - 2}, 1);
            $('.shape').animate({'top': top + 2}, 1);
          break;

          default:
          return;
        };

    });

});

