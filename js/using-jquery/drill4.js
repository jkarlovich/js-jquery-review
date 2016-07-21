$(function(){




    console.log('The dom is ready! (drill 4)');

    //shuffle shapes on first load
    shuffleShapes();
    //shuffle shapes on click of shuffle button
    $('#shuffleThem').on('click',shuffleShapes);

    console.log(Object.keys(whoDo));
    console.log(Object.keys(whatDo));

    $('#doIt').on('click', function () {
      var doWho = $('#whoDo').val();
      console.log(doWho);
      var doWhat = $('#whatDo').val();
      console.log(doWhat);
      var who = whoDo[doWho]();
      console.log(who);
      whatDo[doWhat](who);
    });


        // console.log($('#whoDo').val());
        // if($('#whoDo').val() === 'even') {

        // } else if ($('#whoDo').val() === 'odd') {

        // } else if ($('#whoDo').val() === 'square') {

        // } else if ($('#whoDo').val() === 'circle') {

        // } else if($('#whoDo').val() === 'blue') {
        //   data = blue();

        // } else if($('#whoDo').val() === 'red') {
        //   data = red();

        // } else if($('#whoDo').val() === 'purple') {
        //   data = purple();

        // } else if($('#whoDo').val() === 'orange') {
        //   data = orange();

        // } else if($('#whoDo').val() === 'yellow') {
        //   data = yellow();

        // }
      // });


});




//used to shuffle shapes
var shuffleShapes = function(){
    //loop through each shape (this is jQuery's each not to be confused with Array.forEach())
    $('.shape').each(function(idx){
        //find a valid random position within the bounds of the stage
        var newLeft = Math.floor(Math.random() * ($('.stage').width()-$(this).width()));
        var newTop = Math.floor(Math.random() * ($('.stage').height()-$(this).height()))
        //update the items to their new positions
        $(this).html(idx).animate({left:newLeft+'px',top:newTop+'px'},1000);
    });
}

//#whoDo functions
var whoDo = { 'even' : function() {
  var evenArray = [];
  $('.shape').each(function(){
    if($(this).text() % 2 === 0) {
      evenArray.push(this);
    }
  });
  return evenArray;
},
'odd' : function() {
  var oddArray = [];
  $('.shape').each(function() {
    if($(this).text() % 2 === 1) {
      oddArray.push(this);
    }
  });
  return oddArray;
},

'square' : function() {
  var squareArray = [];
  $('.shape').each(function() {
    if(!$(this).hasClass('ball') ) {
      squareArray.push(this);
    }
  });
  return squareArray;
},

'circle' : function() {
  var circleArray = [];
  $('.shape').each(function() {
    if($(this).hasClass('ball') ) {
      circleArray.push(this);
    }
  });
  return circleArray;
},

'blue' : function() {
  var blueArray = [];
  $('.shape').each(function() {
    console.log($(this).css('background-color'));
    if($(this).css('background-color') === 'blue') {
      blueArray.push(this);
    }
  });
  return blueArray;
},

'orange' : function() {
  var orangeArray = [];
  $('.shape').each(function() {
    console.log($(this).css('background-color'));
    if($(this).css('background-color') === 'orange') {
      orangeArray.push(this);
    }
  });
},

'yellow' : function() {
  var yellowArray = [];
  $('.shape').each(function() {
    console.log($(this).css('background-color'));
    if($(this).css('background-color') === 'yellow') {
      yellowArray.push(this);
    }
  });
  return yellowArray;
},
'red' : function() {
  var redArray = [];
  $('.shape').each(function() {
    console.log($(this).css('background-color'));
    if($(this).css('background-color') === 'red') {
      redArray.push(this);
    }
  });
  return redArray;
},

'purple' : function() {
  var purpleArray = [];
  $('.shape').each(function() {
    console.log($(this).css('background-color'));
    if($(this).css('background-color') === 'purple') {
      purpleArray.push(this);
    }
  });
  return purpleArray;
}
};

//whatDo functions
whatDo = {
'blue' : function(array) {
  array.each(function() {
    $(this).css({'background-color': 'blue'});
  });
},

'red' : function(array) {
  console.log(array);
  array.each(function() {
    $(this).css({'background-color': 'red'});
    console.log(this);
  });
},

'yellow' : function(array) {
  array.each(function() {
    $(this).css({'background-color': 'yellow'});
  });
},

'purple' : function(array) {
  array.each(function() {
    $(this).css({'background-color': 'purple'});
  });
},

'orange' : function(array) {
  array.each(function() {
    $(this).css({'background-color': 'orange'});
  });
},

'square' : function(array) {
  array.each(function() {
    $(this).removeClass('ball');
  });
},

'circle' : function(array) {
  array.each(function() {
    $(this).addClass('ball');
  });
},

'fadeout' : function(array) {
  array.each(function() {
    $(this).fadeOut();
  });

},

'fadein' : function(array) {
    $(this).css({'display': 'none'});
    $(this).fadeIn();
}
};
