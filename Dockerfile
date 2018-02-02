FROM node:latest

RUN apt-get update

RUN apt-get -y install npm

WORKDIR /app

ADD package.json .

# add apple/google verification files
ADD verification/* ./build/

RUN npm install

ADD ./ ./

EXPOSE 3000

CMD ["npm", "run", "start"]
