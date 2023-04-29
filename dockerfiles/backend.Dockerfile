FROM node:16

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "src/index.js" ]