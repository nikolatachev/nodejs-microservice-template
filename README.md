# nodejs-microservice-template

A vanilla JS multithreaded microservice application. Meant to be used as a starter template for more complex projects, so it's not populated with too many features. I have, however, added the basics for mongodb. 

I've made the main express app HTTPS just run the commands in makecert.sh to create the certificates.

```
cd server
mkcert create-ca
mkcert create-cert --domains localhost,127.0.0.1,::1
```

! Don't forget to `npm install` within the server directory and within each microservice directory, they are each their own applications. 

If you are using VSCode, the debug launch configurations are included. If not, just run the main server and each microservice as normal.

Hope this makes somebody's day easier! Here's how I'm using it: [BinanceUS Market Screener](https://simplyflows.com/tools/crypto-screener)