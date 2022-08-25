function app(req, res) {
  if (req.url === "/") {
    //
    res.writeHead(200);
    res.write("<h1>Welcome to the world of NodeJS cloud infrastructure!</h1>");
    res.end();
  } else if (req.url === "/mogenius") {
    // mogenius
    res.writeHead(200);
    res.write("Hello mogenius");
    res.end();
  } else {
    // 404
    res.writeHead(404);
    res.write("Not found");
    res.end();
  }
}

module.exports = app;
