# next-css-postcss-sourcemap-issue

> Demonstrates an issue with next-css and postcss sourcemaps.

Sourcemaps don't point to the correct locations in CSS files.

## Run

1. `npm install`

1. `npm run dev`

1. `open http://localhost:3100`

1. Open dev tools, find any of these elements: `body`, `h1`, `p`, `ul`. Click on the source file for any style.

You'll see that the source pointed to is not correct. It's always the first line of the file. Though I've had cases where it points to different lines, still not correct.
