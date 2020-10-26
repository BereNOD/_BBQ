import io from 'socket.io-client';

const DOMAIN = 'localhost:3080'

const socket = io(`ws://${DOMAIN}/`, { });

socket.emit('hello', 'world');

export default socket