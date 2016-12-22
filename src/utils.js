export function getScrollTop() {
  return document.documentElement.scrollTop || document.body.scrollTop;
}

export function setScrollTop(position) {
  document.documentElement.scrollTop = document.body.scrollTop = position;
}

export function getOffsetTop(element) {
  const { top } = element.getBoundingClientRect();
  return top + getScrollTop();
}

export function scrollToElement(selector, duration = 20, offset = 0) {
  var element = document.querySelectorAll(selector)[0];

  const easing = (x, t, b, c, d) => -c * (t /= d) * (t - 2) + b;

  const start = getScrollTop();
  const to = getOffsetTop(element) + offset;
  const change = to - start;
  const increment = 20;

  function animate(elapsedTime) {
    const elapsed = elapsedTime + increment;
    const position = easing(null, elapsed, start, change, duration);
    setScrollTop(position);
    if (elapsed < duration) {
      setTimeout(function() {
        animate(elapsed);
      }, increment);
    }
  }
  animate(0);
}
