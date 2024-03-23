FROM node:20-alpine as builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

RUN npm i

## need for minify google gcc
RUN apk --update-cache add openjdk11
RUN npm run build

# RUN echo $PWD; ls -hal dist

# CMD ["npm", "run", "start:production"]

FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY --from=builder /usr/src/app/dist ./dist
RUN npm i --only=production

EXPOSE 8081

ENTRYPOINT ["npm", "run", "start:production"]