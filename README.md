# Portable proxy

Just a small package to hide hosts behind the one

## How to use

1. Clone the git repository;
1. Call `npm i` to install all the packages;
1. Create `config.js` file. See [Config schema] for more details;
1. Call `npm start` to start the proxy server.

## Config schema

Example:

```javascript
module.exports = {
    port: 3000,
    servers: [
        { name: "API", target: "http://127.0.0.1:3001/api/v1", regExp: /^\/(api|auth)/ },
        { name: "WEB", target: "http://127.0.0.1:3002" }
    ]
};
```

- ```port: number```

    Proxy server's port:

- ```servers: { name: string, target: string, regExp?: RegExp }[]```

    List of proxed servers.

    - ```name: string```

        Used just for logging

    - ```target: string```

        An url of proxed server.

    - ```regExp?: RegExp```

        Reg exp of request to check if the request should be proxed. If there is no value, Proxy all requests.
