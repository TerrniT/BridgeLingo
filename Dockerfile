FROM node:20-alpine

RUN apk update

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ENV PORT=3000

EXPOSE $PORT

CMD sh -c "npm run build && npm start"
