FROM node:14.16.1-alpine3.13
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm run test
COPY . .
EXPOSE 3000
CMD ["node", "Server.js"]