make install: 
	npm ci
brain-games:
	 node bin/brain-games.js
make publish:
	npm publish --dry-run
make link:
	npx eslint .
brain-even:
	node games/brain-even.js
brain-calc:
	node games/brain-calc.js
	