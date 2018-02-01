FROM node:latest

RUN apt-get update

RUN apt-get -y install npm

RUN mkdir -p /app/build
WORKDIR /app

ADD package.json /app/

# add apple/google verification files
ADD verification/* /app/build/

RUN npm install

ADD . /app

EXPOSE 3000

CMD ["npm", "run", "start"]
