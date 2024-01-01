FROM node:latest as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/

RUN npm install
RUN npm run build

# Use official .nginx image as the base image
FROM nginx:latest

# Generate self-signed cert
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/ssl/private/nginx-ninjaflix.dennisstine.dev.key \
    -out /etc/ssl/certs/nginx-ninjaflix.dennisstine.dev.crt \
    -subj "/C=US/ST=Missouri/L=De Soto/O=Ninjaflix/OU=IT/CN=localhost"

# Copy the .nginx conf that handles routing
COPY .nginx/nginx.conf /etc/nginx/nginx.conf

# Copy the nginx configs
COPY .nginx/self-signed.conf /etc/nginx/self-signed.conf
COPY .nginx/ssl-params.conf /etc/nginx/ssl-params.conf

# Copy the build output to replace the default .nginx contents.
COPY --from=build /usr/local/app/build/ /usr/share/nginx/html

EXPOSE 80
EXPOSE 443
