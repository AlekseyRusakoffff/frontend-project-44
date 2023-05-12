install: 
	npm ci
brain-games:
	 node bin/brain-games.js
publish:
	npm publish --dry-run
make lint:
	nnpx eslint .
test:
	npm test --test-reporter=spec
test-coverage:
	# TODO: set global flag --experimental-test-coverage
	npm test
	