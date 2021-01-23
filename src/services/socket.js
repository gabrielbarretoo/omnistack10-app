import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.103:3333', {
  autoConnect: false,
});

function subscribeToNewDevs(subcribeFunction) {
  console.log('aa')
  socket.on('new-dev', subcribeFunction);
}

function connect(latitude, longitude, techs) {

  socket.on('connect', console.log('connected'))
    
    socket.io.opts.query = {
    latitude,
    longitude,
    techs,
  };

  

  socket.connect();
  console.log(socket.connected)
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export {
  connect,
  disconnect,
  subscribeToNewDevs,
};