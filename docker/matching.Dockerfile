# Base image
FROM node:alpine

# Build stage
WORKDIR /app
COPY ./common /common
COPY ./matching-service/package.json /app/
COPY ./matching-service/package-lock.json /app/
RUN npm install

ENV NODE_ENV=production
COPY ./matching-service /app
RUN npm run build

WORKDIR /app/dist
# Running the app
EXPOSE 8001
CMD ["npm", "start"]