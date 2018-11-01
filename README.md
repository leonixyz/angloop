# Boilerplate Angular + Loopback web application

Boilerplate for a fullstack web application having [Angular](https://angular.io) as a frontend and [Loopback](https://loopback.io) as a backend.

## Prerequisites

* Have [Node.js](https://nodejs.org/en/download/package-manager/) installed (node, npm)
* Have angular-cli installed globally: `npm install -g @angular/cli`
* Have loopback-cli installed globally: `npm install -g loopback-cli`

## Setup

1. `npm install`: instal joint dependencies (Angular + Loopback)
2. `ng build`: build angular client under *./client/dist*
3. `node .`: start Loopback server
   * client will be served on http://localhost:3000/
   * API will be served on http://localhost:3000/api/
   * API explorer will be served on http://localhost:3000/explorer/

## Development

Code the frontend under *./client* and the backend under *./server*

## Deployment

1. Build your docker image: `sudo docker build -t my-web-app .`
2. Run it: `sudo docker run -d -p 3000:3000 my-web-app`

Note that the default application state is not suitable for production.

* You might want to connect Loopback to a RDBMS, to persist your data.
* You might want to scale your application, creating multiple containers and a load balancer.
* You might want to do a lot of other things: this boilerplate is intended just for quick-starting development. Your production setup depends on your needs.