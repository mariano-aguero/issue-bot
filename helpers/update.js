module.exports.NEWS_DUPLICATED = 'news duplicated'
module.exports.NEWS_NO_DUPLICATED = 'news no duplicated'

module.exports.update = async context => {
    // Extract necessary info
    const issue = context.issue()
    const repo = context.repo()

    console.log(issue)
    console.log(repo)
}

