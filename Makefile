install: #install packages
	npm ci
brain-games: #run game
	node bin/brain-games.js
brain-even: #run even
	node games/brain-even.js
brain-calc: #run even
	node games/brain-calc.js
brain-gcd: #run even
	node games/brain-gcd.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
link:
	sudo npm link --force
