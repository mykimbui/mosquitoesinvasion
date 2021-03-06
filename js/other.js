$(document).ready(function() {
  animateDiv($('.a'));
  animateDiv($('.b'));
  animateDiv($('.c'));
  animateDiv($('.d'));
  animateDiv($('.e'));
  animateDiv($('.f'));
  animateDiv($('.g'));
  animateDiv($('.h'));
  animateDiv($('.i'));
  animateDiv($('.k'));
  animateDiv($('.l'));
  animateDiv($('.m'));
  animateDiv($('.n'));
  animateDiv($('.o'));
  animateDiv($('.j'));
});

function makeNewPosition($container) {
  var h = $container.height() - Math.random();
  var w = $container.width() - Math.random();
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
  return [nh, nw];
}

function animateDiv($target) {
  var newq = makeNewPosition($target.parent());
  var oldq = $target.offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);
  $target.animate({
    top: newq[0],
    left: newq[1]
  }, speed, function() {
    animateDiv($target);
  });
};

function calcSpeed(prev, next) {
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);
  var greatest = x > y ? x : y;
  var speedModifier = 0.1;
  var speed = Math.ceil(greatest / speedModifier);
  return speed;
}



