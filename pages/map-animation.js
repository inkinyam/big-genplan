

/*************************************************************************** */
let locationDescr = document.querySelector('.map__description');

const forEach = function(array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

var randomIntFromInterval = function(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

var $mapPins = document.querySelectorAll('#Map-svg a');

// Setup timelines attached to each map pin
forEach($mapPins, function(index, value) {
  // Group opacity timeline
  value.groupTimeline = new TimelineMax({
    paused: true
  });
  
  value.groupTimeline
  .to(value, 0.4, {
    opacity: 0
  });
  
  // Pulse animation
  var pinTimeline = new TimelineMax({
    repeat: -1,
    delay: randomIntFromInterval(1,10),
    repeatDelay: randomIntFromInterval(0, 10)
  });
    
   pinTimeline.
    to(value.querySelector('.Pin-back'), 2, {
      scale: 10,
      transformOrigin: 'center center',
      opacity: 0
    }); 
});

forEach(document.querySelectorAll('.Pin-front'), function(index, value) {
 
   value.addEventListener('mouseenter', function(e) {   
    let location = e.target.parentNode.getAttribute('data-location');
    locationDescr.textContent = location;

  
     
     // Hide other map pins
     forEach($mapPins, function(index, value) {
       if (value.getAttribute('data-location') !== location) {
         value.groupTimeline.play();
       }
     });
   }, false);
  
  value.addEventListener('mouseleave', function(e) {
    // Reverse all hidden map pins
    forEach($mapPins, function(index, value) {
       value.groupTimeline.reverse();
    });
    
  }, false);
});
  