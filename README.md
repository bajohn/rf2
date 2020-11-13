# Rf2

RF, take two

## Tech Stack
- Built on AWS Amplify's Angular integration

## TODO

- Get `@connection` to work to map Player elements of a Room in graphql schema.

## DONE
- Get all cards to work at the same time- currently having a z-index stacking problem.
- On end of card being dragged, update with final position (skip x ms rate limiter defined by `updateMinMs`)
- Write graphql query for cards belonging to a game. This is possible via a graphql schema query `amplify/backend/api/rf2/schema.graphql`