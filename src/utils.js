/* globals Headers, fetch */
import 'whatwg-fetch'
import config from './config'

// export function handleXHRErrors(error) {
//   console.warn(error);
// }

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

const handleTimeout = (error) => {
  if (error.message === 'request_timeout') {
    alert('The request timed out')
  }
}

const timeout_duration = 30000

export function Request(url, {
  method = 'GET',
  headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }),
  mode = 'cors',
  redirect = 'follow',
  body
} = {}) {
  if (body) body = JSON.stringify(body)
  if (!/^https?:\/\//i.test(url)) url = config.urls.url + url

  const race = Promise.race([
    fetch(url, {
      method,
      headers,
      body,
      mode,
      redirect
    })
    .then((response) => {
      return response.json()
    }),
    new Promise(function (resolve, reject) {
      setTimeout(() => reject(new Error('request_timeout')), timeout_duration)
    })
  ])

  race.catch(handleTimeout)
  return race
}
