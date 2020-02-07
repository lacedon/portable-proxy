# Portable proxy

Just a small package to hide hosts behind the one

## How to use

1. Clone the git repository
1. Call `npm i` to install all the packages
1. Create `config.js` file in root folder with next content:
    ```javascript
    module.exports = {
        port: number,
        servers: { name: string, target: string, regExp?: RegExp }[]
    }
    ```
    Example:
    ```javascript
    module.exports = {
        port: 3000,
        servers: [
            { name: "API", target: "http://127.0.0.1:3001", regExp: /^\/(api|auth\/callback)/ },
            { name: "WEB", target: "http://127.0.0.1:3002" }
        ]
    };
    ```
1. Call `npm start` to start the proxy server
