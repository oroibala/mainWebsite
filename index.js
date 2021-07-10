const Logger = require('./eventEmitter.js');

const logger = new Logger();

logger.on('message', (data) => console.log('Hello World', data))
logger.log('Hello World')