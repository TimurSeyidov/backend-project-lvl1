install: #install packages
	npm ci
brain-games: #run game
	node bin/brain-games.js
brain-even: #run even
	node bin/brain-even.js
publish:
	npm publish --dry-run
lint:
	npx eslint .