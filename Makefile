install: #install packages
	npm ci
brain-games: #run game
	node bin/brain-games.js
publish:
	npm publish --dry-run
