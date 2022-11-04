# Base image
FROM node:14-alpine

# Build stage
WORKDIR /app
COPY ./common /common
COPY ./frontend/package.json /app/
COPY ./frontend/package-lock.json /app/
RUN npm install

COPY ./frontend /app

RUN npm run build --production
RUN npm install -g serve

# Running the app
EXPOSE 3000
CMD serve -s build