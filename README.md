Fonts come from Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.

## TODO:

- fix the console error about useLocalStorage is a client-only hook
- merge this branch into master (so it deploys)
- try deploying it, see if it still works (need to update links)
- if i have done it today, dont let me do it again

- add character images from awais, adjust to fit in the centre of the circle
- proper domain (route 53)
- replace vercel URL with proper URL in game (constants.js)
- share with john wheeler
- back-end, just put in one week's few days worth of quotes, add one quote per character

## TODO Fanciness:

- affiliate link to 'duff beer' on amazon
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
- update the api path to / (in page.js). That didnt work in dev.
- you can cheat and look at the API response to see the answers...

Identify who said the 5 simpsons quotes
https://simpsons.fandom.com/wiki/Homer_Simpson#Quotes
http://www.notable-quotes.com/s/simpsons_quotes_v.html
https://thesimpsonsquoteapi.glitch.me/ (50 quotes)
https://www.boredpanda.com/quotes-from-the-simpsons/
https://www.dafont.com/simpsonfont.font?text=Trivia&psize=l
https://www.thewordfinder.com/simpsons-font-generator/

# Stack

React
Next.js
Vercel + GitHub Actions
StoryBook
LocalStorage
