FROM node:8

ADD . /opt/webapp

EXPOSE 3000

CMD ["node", "/opt/webapp"]
