FROM node:14.16.1-alpine3.13
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 3000
RUN npm test
CMD ["npm", "run", "test"]
CMD ["node", "Server.js"]
