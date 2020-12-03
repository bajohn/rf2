# Rf2

RF, take two

## Tech Stack
- Built on AWS Amplify's Angular integration

## Notes
- `amplify mock` does not seem to work with parameterized subscriptions
- To change from mock to cloud server, force recompilation via `amplify push`. `Ctrl-c` is supposed to work but doesn't seem to.
- It is possible to regenerate `src/graphql/subscriptions.ts` by changing `codeGenTarget` in `.graphqlconfig.yml` from `angular` to `typescript`

## Refs
https://github.com/aws-amplify/docs/pull/614/files


## TODO

- Write out logical game flow!
- Card stacks


## DONE
- Get `@connection` to work to map Player elements of a Room in graphql schema.
- Get all cards to work at the same time- currently having a z-index stacking problem.
- On end of card being dragged, update with final position (skip x ms rate limiter defined by `updateMinMs`)
- Write graphql query for cards belonging to a game. This is possible via a graphql schema query `amplify/backend/api/rf2/schema.graphql`
- Cloud dev iteration is slow! Figure out local dev
- Figure out parameterized subscriptions!
- Figure how to get query strings from auto-generated queries.
- Set up card subscriptions with properly scoped parameters (`cardValue, roomId`)