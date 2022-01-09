FROM node:14

# FROM mongo

WORKDIR /app/wave-entry-server

COPY . .

EXPOSE 3001

RUN npm i

CMD ["npm" , "start"]




