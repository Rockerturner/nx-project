FROM node:20-alpine as build

WORKDIR /usr/app/src

COPY ./../package*.json /usr/app/src/

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:1.24.0-alpine

COPY --from=build /usr/src/app/dist/client /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]