FROM node:lts-alpine3.18
WORKDIR /app
COPY . .
RUN npm install --production

ENV MYSQL_HOST=127.0.0.1
ENV MYSQL_PORT=3306
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=secret
ENV MYSQL_DBNAME=node_todos

EXPOSE 3030
CMD ["npm", "start"]