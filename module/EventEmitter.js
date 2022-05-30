const Emitter = require('events')  // class
const logger = new Emitter() // object

logger.on('logger', function (obj) {
    console.log('Logging', obj);
})

// logger.addListener('logger', function () {
//     console.log('Logging');
// })

logger.emit('logger', { date: '28.05.2022', id: 1 })


