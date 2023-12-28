FROM node:latest as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/

RUN npm install
RUN npm run build

# Use official nginx image as the base image
FROM nginx:latest

# Copy the nginx conf that handles routing
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/media-server-home-page /usr/share/nginx/html

# Expose port 80
EXPOSE 80
