FROM node:14

WORKDIR /app/waveentry/server

COPY . .

EXPOSE 3001

RUN npm i

CMD ["npm" , "start"]




