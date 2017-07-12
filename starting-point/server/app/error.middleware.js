function errorMiddleware (err, req, res, next) {
  err.status = err.status || 500;
  console.error(err.stack);
  var html = [
    '<html><body>',
    '<p>ERROR: ', err.status, ' - ', err.message, '</p>',
    '<p>VERB: ', req.method, '</p>',
    '<p>URL: ', req.originalUrl, '</p>',
    '<p>QUERY ', JSON.stringify(req.query), '</p>',
    '<p>BODY: ', JSON.stringify(req.body), '</p>',
    '<pre>', err.stack, '</pre>',
    '</body></html>'
  ].join('');
  res.status(err.status).send(html);
}

module.exports = errorMiddleware;
