FROM nginx:stable-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

COPY ./ssh/nginx.crt /etc/nginx/certs/
COPY ./ssh/nginx.key /etc/nginx/certs/

EXPOSE 80
