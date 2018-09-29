/**
 * This is the entry point for your Probot App.
 * @param {import('probot').Application} app - Probot's Application class.
 */
module.exports = app => {
	app.log('Yay, the app was loaded!')
	app.on('issues.opened', async (ctx) => {
		return ctx.github.issues.addLabels(
			ctx.issue({
				labels: ['Hacktoberfest']
			})
		)
	})
}
