# Matching Service

This service facilitates the matching of two users who have selected the same question difficulty.

## Run Service

1. Install npm packages using `npm i`
2. Setup Redis server
   2.1. If running redis server locally using docker, run `docker run --name redis -p 6379:6379 -d redis`
3. Run Matching Service using `npm run start` or `npm run dev` for hot reload during development
4. Access the service at http://localhost:8001
