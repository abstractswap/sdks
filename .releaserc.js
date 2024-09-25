const path = require('path');
const execSync = require('child_process').execSync;

module.exports = {
	extends: 'semantic-release-monorepo',
	branches: ['main', 'beta', 'abstract'],
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		['@semantic-release/npm', {
			npmPublish: false,
			tarballDir: 'dist',
			verifyConditions: [
				{
					path: '@semantic-release/npm',
					npmPublish: false,
				},
				'@semantic-release/github'
			],
			prepare: [
				{
					path: '@semantic-release/npm',
					npmPublish: false,
					cmd: (version) => {
						const packagePath = path.resolve(process.cwd(), 'package.json');
						const pkg = require(packagePath);
						pkg.version = version;
						require('fs').writeFileSync(packagePath, JSON.stringify(pkg, null, 2) + '\n');
						execSync(`yarn version --new-version ${version} --no-git-tag-version`, { stdio: 'inherit' });
					}
				},
			],
		}],
		['@semantic-release/github', {
			assets: 'dist/*.tgz',
		}],
	],
};
