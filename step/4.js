var step = require('step')
  , ping = require('pinger')
  , urls
  ;

/* Demonstrate using group for parallel execution. */
urls = [
  'google.com',
  'facebook.com',
  'exchangejs.com'
];

step(
  
  function () {
    // create the group object
    var group = this.group();

    urls.forEach(function (item) {
      // group gets called each time, so
      // step can keep track of the number
      // of callbacks. the group callback
      // expects the same function(err, data)
      // signature
      ping(item, group());
    });
  },

  // function (err, pings) {
  //   if (err) throw err;
  //   console.log(pings)
  // }
)