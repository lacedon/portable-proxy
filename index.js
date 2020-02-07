var http = require("http");
var httpProxy = require("http-proxy");
var { port, host, servers } = require("./config");

var proxy = httpProxy.createProxyServer({});

http
  .createServer(function handleRequest(request, response) {
    for (var index = 0; index < servers.length; index += 1) {
      var server = servers[index];
      if (server.regExp && !server.regExp.test(request.url)) {
        continue;
      }

      console.log(`${server.name}\t`, request.url);
      proxy.web(
        request,
        response,
        { target: server.target },
        function reportRequestProxyError(error) {
          console.error(error.message);
          response.statusCode = 400;
          response.end(error.message);
        }
      );
      break;
    }
  })
  .listen(port, host, function reportSuccessStatus() {
    console.log(`Proxy server's listening on port ${host || ""}:${port}`);
  });

proxy.on("error", function reportCommonProxyError(error) {
  console.error(error.message);
});
