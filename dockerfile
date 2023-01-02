
FROM nginx

ADD ./build /user/share/nginx/html

COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000


