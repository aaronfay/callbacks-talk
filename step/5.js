var step = require('step')
  , api = require('./api')
  ;

/* Some other final options */

step(
  // functions can be named
  function start() {
    // nothing to see here
    console.log('start here')
    this(null);
  },

  // chain in another module
  api.methodOne, 

  // and another
  api.methodTwo,

  // wrap up
  function done(err) {
    console.log('...and we\'re done.')
  }
)