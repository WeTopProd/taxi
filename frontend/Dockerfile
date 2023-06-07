FROM node:19.8.1-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=production
RUN npm run build
CMD cp -r build result_build


CMD ["npm", "run", "serve"]
