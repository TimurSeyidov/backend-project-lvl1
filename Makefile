install: #install packages
	npm ci
brain-games: #run game
	node bin/brain-games.js
brain-even: #run even
	node game/brain-even.js
brain-calc: #run even
	node game/brain-calc.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
link:
	sudo npm link
