# Base image
FROM node:alpine

# Build stage
WORKDIR /app
COPY ./common /common
COPY ./communication-service/package.json /app/
COPY ./communication-service/package-lock.json /app/
RUN npm install

ENV NODE_ENV=production
COPY ./communication-service /app
RUN npm run build

WORKDIR /app/dist
# Running the app
EXPOSE 8005
CMD ["npm", "start"]