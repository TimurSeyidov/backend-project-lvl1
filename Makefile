install: #install packages
	npm ci
brain-games: #run game
	node bin/brain-games.js
brain-even: #run even
	node games/brain-even.js
brain-calc: #run calc
	node games/brain-calc.js
brain-gcd: #run gcd
	node games/brain-gcd.js
brain-progression: #run progression
	node games/brain-progression.js
brain-prime: #run prime
	node games/brain-prime.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
link:
	sudo npm link --force
