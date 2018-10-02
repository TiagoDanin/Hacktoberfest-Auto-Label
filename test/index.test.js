const { Application } = require('probot')
const myProbotApp = require('..')

const issuesOpenedPayload = require('./fixtures/issues.opened.json')

describe('Hacktoberfest Auto Label Bot', () => {
	let app, github
	beforeEach(() => {
		app = new Application()
		app.load(myProbotApp)
		github = {
			issues: {
				addLabels: jest.fn().mockReturnValue(Promise.resolve({}))
			}
		}
		app.auth = () => Promise.resolve(github)
	})

	test('An issue is opened', async () => {
		await app.receive({
			name: 'issues.opened',
			payload: issuesOpenedPayload
		})
		expect(github.issues.addLabels).toHaveBeenCalled()
	})
})
