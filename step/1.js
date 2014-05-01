var step = require('step')
  ;

/*
 * The following will "step" through your function
 * calls sequentially.
 */

step(
  /* demonstrate a return value */
  function () {
    console.log('First step called...');
    return true;
  },

  /* false return value will still return */
  function (err, returned) {
    console.log('Second step called... ' + returned);
    return false;
  }

  /* demonstrate error handling */
  // function (err, returned) {
  //   console.log('Still have return value: ' + returned);
  //   throw new Error('Now I broke it.')
  // },

  /* demonstrate undefined return value */
  // function (err) {
  //   if (err) {
  //     console.log("Got error: " + err)
  //   }
  //   return;
  // }, 

  // function () {
  //   console.log('This will never get called')
  // }
)