module.exports = {
  branches: ['main', 'beta', 'abstract'],
  plugins: [
    ['@semantic-release/commit-analyzer', {
      preset: 'angular',
      releaseRules: [
        { type: 'feat', scope: 'breaking', release: 'major' },
        { scope: 'public', release: 'patch' },
        { type: 'feat', release: 'minor' },
        { type: 'fix', release: 'patch' },
        { type: 'docs', release: 'patch' },
        { type: 'style', release: 'patch' },
        { type: 'refactor', release: 'patch' },
        { type: 'perf', release: 'patch' },
        { type: 'test', release: 'patch' },
        { type: 'ci', release: 'patch' },
        { type: 'chore', release: 'patch' },
      ],
    }],
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
};
