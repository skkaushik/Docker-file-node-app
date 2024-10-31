FROM node:18.20.0
COPY . .
RUN npm install
EXPOSE 6000
CMD [ "node", "index.js" ]