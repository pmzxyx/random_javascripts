javascript:(function(){['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){Array.prototype.slice.call(document.querySelectorAll('img')).map(function(el){el.style[prefix + 'transform'] = 'rotate(180deg)';});});}())

//troll people
