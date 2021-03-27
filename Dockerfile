FROM node:12.19.0-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY . ./
RUN npm ci --silent
COPY . ./
CMD [ "node", "." ]
