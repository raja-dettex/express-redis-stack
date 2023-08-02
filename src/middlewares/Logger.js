class Logger {
    info(data) {
        console.log(`INFO \t ${new Date().toLocaleTimeString()} \t ${data}`)
    }
    error(data) {
        console.error(`ERROR \t ${new Date().toLocaleTimeString()} \t ${data}`)
    }
}

module.exports = { Logger }