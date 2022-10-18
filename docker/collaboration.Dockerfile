# Base image
FROM node:alpine

# Build stage
WORKDIR /collaboration-service
COPY ./common /common
COPY ./collaboration-service/package.json /collaboration-service/
COPY ./collaboration-service/package-lock.json /collaboration-service/
RUN npm install

ENV NODE_ENV=production
COPY ./collaboration-service /collaboration-service
RUN npm run build

WORKDIR /collaboration-service/dist
# Running the app
EXPOSE 8002
CMD ["npm", "start"]