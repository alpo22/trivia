Fonts come from Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.

## TODO:

- The NextJS seems to work...

  - update the api path to / (in page.js)
  - move it to the main folder
  - fix the console error about useLocalStorage is a client-only hook
  - merge this branch into master (so it deploys)
  - try deploying it, see if it still works
  - update existing quotes date in vercel

- back-end, just put in one week's few days worth of quotes, add one quote per character
- get/set proper stats from localStorage
- if i have done it today, dont let me do it again
- add character images from awais, adjust to fit in the centre of the circle
- proper domain (route 53)
- replace vercel URL with proper URL in game (constants.js)
- share with john wheeler

## TODO Fanciness:

- is free Vercel app too slow on cold start?
- add dr nick image to the welcome screen?
- if anyone plays it, need an ad... where?
- on start, bring title forward (like does on the show), then make modal appear
- slide next question in from right
- can go back to previous questions
- could show most guessed incorrect answer
- use different state management
- on the results screen, show their score, show the character image, the quote, and what they guessed
- the images at the end need to pre-load
- when click 'share' on last screen, copy should change to 'copied'
- show error/warning when submit without making a choice

Identify who said the 5 simpsons quotes
https://simpsons.fandom.com/wiki/Homer_Simpson#Quotes
http://www.notable-quotes.com/s/simpsons_quotes_v.html
https://thesimpsonsquoteapi.glitch.me/ (50 quotes)
https://www.boredpanda.com/quotes-from-the-simpsons/
https://www.dafont.com/simpsonfont.font?text=Trivia&psize=l
https://www.thewordfinder.com/simpsons-font-generator/

# Stack

Vite
React
Vercel + GitHub Actions
StoryBook
