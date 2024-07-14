I think the notes about the setup are out-dated since I moved this to DigitalOcean. I made one branch with only the front-end code, so that gets pushed to DO. And another branch with only the back-end code, so that gets pushed somewhere else in DO.

I'm taking it down from DO because it is around $1/day, and no one is using it.

AnecDOH!tes is a fun little Simpsons Quote trivia game, inspired by games like [Wordle](https://www.nytimes.com/games/wordle/index.html) or [Framed](www.framed.wtf). Each day you will see five Simpsons quotes and it is up to you to identify who said which. Stats are stored locally. Share and compete with friends. Play here: [anecDOHtes.com](https://www.anecdohtes.com)

At it's peak, it had 900 players per day, but the more regular number was 100.

## Stack

- PHP + React
- DigitalOcean App Platform + GitHub
- StoryBook
- LocalStorage
- NameCheap.com

## Running locally

`npm run dev`

This uses the `main production` database.

## Deployment

The `main` branch deploys to the `production` branch (and URL) of Vercel (https://www.anecdohtes.com).

The `preview` branch deploys to the `preview` branch (and URL) of Vercel (https://anecdohtes-preview.vercel.app/).

# Acknowledgements

Fonts come from Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.
