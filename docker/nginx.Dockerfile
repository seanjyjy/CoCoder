FROM nginx:stable-alpine
RUN rm /etc/nginx/conf.d/*
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
CMD [ "nginx", "-g", "daemon off;" ]