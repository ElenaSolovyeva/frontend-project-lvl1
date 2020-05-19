brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

install:
	npm install

lint:
	npx eslint .

publish:
	npm publish --dry-run
