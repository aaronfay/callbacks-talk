var step = require('step')
  ;

/*
 * The following demonstrates intentional calling
 * of the next item in the sequence.
 */

step(
  function () {
    /* do some work */
    this(null, 'some data')
  },

  // function (err, data) {
  //   if (err) throw err;
  //   console.log('Got: ' + data)
  // }
)