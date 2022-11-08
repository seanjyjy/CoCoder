# History Service

This service manages the history of user activities. It allows querying of a user’s history as well as providing APIs for statistical data

## Run Service

1. Install npm packages using `npm i`
2. Rename `.env.sample` to `.env`
3. Setup mongodb database
   3.1. If running mongodb locally using docker, run `docker run --name mongo -p 27017:27017 -d mongo`
4. Run History Service using `npm run start` or `npm run dev` for hot reload during development
5. Access the service at http://localhost:8003
