module.exports = function(app) {
  app.get('/members', function(req, res) {
    res.send('hello');
  });
};
