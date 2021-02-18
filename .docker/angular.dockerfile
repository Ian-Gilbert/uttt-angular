FROM nginx:alpine
WORKDIR /workspace
LABEL maintainer="https://github.com/Ian-Gilbert"

COPY /workspace/nginx.conf /etc/nginx/nginx.conf
COPY /workspace/dist/ /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]
