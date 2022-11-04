# Base image
FROM node:alpine

# Build stage
WORKDIR /app
COPY ./common /common
COPY ./history-service/package.json /app/
COPY ./history-service/package-lock.json /app/
RUN npm install

ENV NODE_ENV=production
COPY ./history-service /app
RUN npm run build

WORKDIR /app/dist
# Running the app
EXPOSE 8003
CMD ["npm", "start"]