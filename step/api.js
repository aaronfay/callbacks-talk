module.exports = {
  methodOne: function (err) {
    if (err) throw err;
    console.log('module method one called');
    this(null);
  }, 
  methodTwo: function (err) {
    if (err) throw err;
    console.log('module method two called');
    this(null);
  }
}