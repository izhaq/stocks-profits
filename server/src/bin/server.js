#!/usr/bin/env node
/**
 * Module dependencies.
 */

import {app} from '../app';
import debug from 'debug';
import http from 'http';


class Server{

  constructor(){}
  init(){
    debug('stocks-server:server');
    this.setPort();
    this.setHttpServer();
  }

  /**
   * Get port from environment and store in Express.
   */
  setPort(){
    this.port = this.normalizePort(process.env.PORT || '3000');
    app.set('port', this.port);
  }

  /**
   * Create HTTP server.
   * Listen on provided port, on all network interfaces.
   */
  setHttpServer(){
    this.server = http.createServer(app);
    this.server.listen(this.port);
    this.server.on('error', this.onError);
    this.server.on('listening', this.onListening);
  }

  /**
   * Normalize a port into a number, string, or false.
   */
  normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }

    return false;
  }

  /**
   * Event listener for HTTP server "error" event.
   */

   onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  /**
   * Event listener for HTTP server "listening" event.
   */

  onListening() {
    return ()=> {
      let addr = this.server.address();
      let bind = typeof addr === 'string'
          ? 'pipe ' + addr
          : 'port ' + addr.port;
      debug('Listening on ' + bind);
    }
  }

}

const server = new Server();
server.init();
console.log("Server available on: ", "http://localhost:"+server.port+"/");