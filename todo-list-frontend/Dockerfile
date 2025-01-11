# Gunakan image node.js resmi sebagai base image
FROM node:22 AS build

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]


