var step = require('step')
  , fs = require('fs')
  ;


step(
  
  function () {
    var cb = this;
    fs.readFile('/etc/hosts', {encoding: "utf8"}, function (err, data) {
      if (err) throw err;
      // console.log(data);
      cb(null, data)
    });
  },

  function (err, data) {
    if (err) throw err;
    console.log('Got the data!\n\n')
    console.log(data)
  }
)