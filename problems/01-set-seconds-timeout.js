/***********************************************************************
Recall that the built-in `setTimeout` function accepts a delay in
milliseconds. It would be cool if we had a version that could accept the
delay in seconds!

Write a function, `setSecondsTimeout`, that accepts a callback and a delay
in *seconds*. The function should set a timeout on the given callback for
the specified amount of time. Feel free to use the built-in `setTimeout`
in your implementation.


***********************************************************************/

function setSecondsTimeout(cb, delayInSeconds) {
  const delayInMilliseconds = delayInSeconds * 1000
  return setTimeout(cb, delayInMilliseconds)
}

setSecondsTimeout(function () {
    console.log('hello')
}, 1); // should print 'hello' after 1000 milliseconds

setSecondsTimeout(function () {
    console.log('world');
}, 1.4); // should print 'world' after 1400 milliseconds
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = setSecondsTimeout;
} catch {
  module.exports = null;
}
