FROM node:latest as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/

RUN npm install
RUN npm run build

# Use official .nginx image as the base image
FROM nginx:latest

# Copy the .nginx conf that handles routing
COPY .nginx/nginx.conf /etc/nginx/nginx.conf

# Copy the nginx configs
COPY .nginx/self-signed.conf /etc/nginx/self-signed.conf
COPY .nginx/ssl-params.conf /etc/nginx/ssl-params.conf

# Copy the build output to replace the default .nginx contents.
COPY --from=build /usr/local/app/build/ /usr/share/nginx/html

EXPOSE 80 443
