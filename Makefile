install: #install packages
	npm ci
brain-games: #run game
	node bin/brain-games.js
brain-even: #run even
	node bin/brain-even.js
brain-calc: #run calc
	node bin/brain-calc.js
brain-gcd: #run gcd
	node bin/brain-gcd.js
brain-progression: #run progression
	node bin/brain-progression.js
brain-prime: #run prime
	node bin/brain-prime.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
link:
	sudo npm link --force
