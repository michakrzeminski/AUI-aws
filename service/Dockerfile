FROM mhart/alpine-node:7.10.1

WORKDIR /srv
ADD . .
RUN npm install
RUN npm install -g mocha

EXPOSE 3000
CMD ["node", "app/server.js"]
