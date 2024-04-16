const startApp = require('./app')
const { appConfig } = require('./config')

async function initApp (appConfig) {
    try {
        startApp(appConfig);
    } catch (error) {
        console.error(error)
        process.exit(0)
    }
}

initApp(appConfig)
