 FROM node:lts-alpine

# install simple http server for serving static content
 RUN npm install -g http-server

# make the 'app' folder the current working directory
 WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
 COPY package*.json ./

# install project dependencies
 RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
 COPY . .
# build app for production with minification
 RUN npm run build

# EXPOSE 8080
 CMD [ "http-server", "dist" ]


#FROM node:lts-alpine as develop-stage
#WORKDIR /app
#COPY . .
#COPY package*.json ./
#RUN npm install
#FROM develop-stage as build-stage
#RUN npm run serve 
# production stage
#FROM nginx:1.17.5-alpine as production-stage
#COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
#COPY prod_nginx.conf /etc/nginx/nginx.conf
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
