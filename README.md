AnecDOH!tes is a fun little Simpsons Quote trivia game, inspired by games like [Wordle](https://www.nytimes.com/games/wordle/index.html) or [Framed](www.framed.wtf). Each day you will see five Simpsons quotes and it is up to you to identify who said which. Stats are stored locally. Share and compete with friends. Play here: [anecDOHtes.com](https://www.anecdohtes.com)

## Stack

- Next.js + React
- Vercel + GitHub
- PlanetScale
- StoryBook
- LocalStorage
- NameCheap.com

## Deployment

The `main` branch deploys to the `production` branch (and URL) of Vercel (https://www.anecdohtes.com). Currently it is using Vercel's database but that will change to use PlanetScale's DB once I merge `preview` into `main`.

The `preview` branch deploys to the `preview` branch (and URL) of Vercel (https://anecdohtes-preview.vercel.app/).

Running `npm run dev` locally seems to use the `main` database.

## Database

Currently using Vercel's database but it's too expensive, so moving to PlanetScale for free.

Access Vercel's database via Vercel.

Acess PlanetScale's database via PlanetScale, or SequelAce.

## TODO:

- I have environment variables and `.env` and `.env.local`... are they all necessary? Some environment variables were for Vercel DB so wont need those any more.
- Get rid of AppWrapper.jsx since it is not needed any more.
  x share on Reddit
  x share on FaceBook
  x share on https://nohomers.net/

- share on http://www.lardlad.com/
- add ads

## TODO v2:

- after no one uses it, i still want it on my portfolio but dont want to be entering more quotes. make it choose random ones.
- handle if there are no quotes returned from DB
- affiliate link to 'duff beer' on amazon, or an ad somewhere (after question 3?)
- improve quality of character images (get someone to make them a square)
  - is the game too hard? John got zero. Needs to be multiple choice?
- on start, bring title forward (like does on the show), then make modal appear
- slide next question in from right
- can go back to previous questions
- can resume day if exit without completing
- could show most guessed incorrect answer
- use different state management
- the images at the end need to pre-load
- when click 'share' on last screen, copy should change to 'copied'
- show error/warning when submit without making a choice
- you can cheat and look at the API response to see the answers...
- TypeScript
- have a 'download' button (SPA)
- When share, do like Wordle and indicate which were right and which were wrong

## Resources

https://simpsons.fandom.com/wiki/Homer_Simpson#Quotes
http://www.notable-quotes.com/s/simpsons_quotes_v.html
https://thesimpsonsquoteapi.glitch.me/ (50 quotes)
https://www.boredpanda.com/quotes-from-the-simpsons/

# Acknowledgements

Fonts come from Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.
