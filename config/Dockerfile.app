FROM node:22.13

ARG PAT
ENV PAT=${PAT}

WORKDIR /usr/src
RUN git clone https://$PAT@github.com/Karmello/cat-app.git

WORKDIR /usr/src/cat-app
RUN yarn clone-shared

WORKDIR /usr/src/cat-app
RUN yarn install
