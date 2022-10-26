# Base image
FROM node:alpine

# Build stage
WORKDIR /app
COPY ./common /common
COPY ./collaboration-service/package.json /app/
COPY ./collaboration-service/package-lock.json /app/
RUN npm install

ENV NODE_ENV=production
COPY ./collaboration-service /app
RUN npm run build

WORKDIR /app/dist
# Running the app
EXPOSE 8002
CMD ["npm", "start"]