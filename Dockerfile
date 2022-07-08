FROM node:alpine

WORKDIR /locLib

COPY package.json /locLib

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]