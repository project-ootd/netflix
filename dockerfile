FROM nginx:1.23.3-alpine

ADD ./build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

