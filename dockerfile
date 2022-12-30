FROM node16-alpine3.16 
WORKDIR usr/src/components/app
COPY package.json ./
RUN npm install
COPY ./ ./
CMD ["npm", "run", "start"/]