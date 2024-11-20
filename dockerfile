FROM ubuntu:24.10 as bare

ARG DEBIAN_FRONTEND='noninteractive'

RUN apt-get update
RUN apt-get install -y \
    nodejs \
    npm

EXPOSE 8081

FROM bare as run

COPY . .
RUN npm i
RUN npm start

FROM bare as dev

RUN apt-get install -y \
    git \
    vim

RUN git config --gloabl core.editor vi
