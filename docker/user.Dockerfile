# Base image
FROM node:alpine

# Build stage
WORKDIR /app
COPY ./common /common
COPY ./user-service/package.json /app/
COPY ./user-service/package-lock.json /app/
RUN npm install

ENV NODE_ENV=production
COPY ./user-service /app
RUN npm run build

WORKDIR /app/dist
# Running the app
EXPOSE 8000
CMD ["npm", "start"]