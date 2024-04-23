build:
	docker build -t bridge-lingo-bot .

run:
	docker run --restart=unless-stopped -d -p 3000:3000 --name bridge-lingo-bot bridge-lingo-bot
