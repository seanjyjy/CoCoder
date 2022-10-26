# Base image
FROM node:alpine

# Build stage
WORKDIR /app
COPY ./common /common
COPY ./question-service/package.json /app/
COPY ./question-service/package-lock.json /app/
RUN npm install

ENV NODE_ENV=production
COPY ./question-service /app
RUN npm run build

WORKDIR /app/dist
# Running the app
EXPOSE 8004
CMD ["npm", "start"]