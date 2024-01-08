This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Fonts come from Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.

## TODO:

- The NextJS seems to work...

  - move it to the main folder
  - fix the console error about useLocalStorage is a client-only hook
  - merge this branch into master (so it deploys)
  - try deploying it, see if it still works (need to update links)
  - update existing quotes date in vercel

- back-end, just put in one week's few days worth of quotes, add one quote per character
- get/set proper stats from localStorage
- if i have done it today, dont let me do it again
- add character images from awais, adjust to fit in the centre of the circle
- proper domain (route 53)
- replace vercel URL with proper URL in game (constants.js)
- share with john wheeler

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
