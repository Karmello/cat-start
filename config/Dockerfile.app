FROM node:20.10.0

ARG PAT
ENV PAT=${PAT}

WORKDIR /usr/src
RUN git clone https://$PAT@github.com/Karmello/cat-app.git

WORKDIR /usr/src/cat-app
RUN yarn clone-shared

WORKDIR /usr/src/cat-app
RUN yarn install
