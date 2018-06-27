const {join} = require('path')

const update = require('./helpers/update')

module.exports = robot => {

    robot.on('issues.opened', async context => {
        const labels = [update.NEWS_DUPLICATED]
        return context.github.issues.addLabels(context.issue({labels}))
    });

    // Get an express router to expose new HTTP endpoints
    const app = robot.route('/')

    // Index page
    app.get('/', (req, res) => {
        res.sendFile(join(__dirname, 'index.html'))
    })
}
