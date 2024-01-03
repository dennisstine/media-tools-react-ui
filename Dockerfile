FROM node:latest as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/

RUN npm install
RUN npm run build

# Use official .nginx image as the base image
FROM nginx:latest

# Copy the nginx configs
COPY .nginx/*.conf /etc/nginx/

# Copy the build output to replace the default .nginx contents.
COPY --from=build /usr/local/app/build/ /usr/share/nginx/html

EXPOSE 80 443
