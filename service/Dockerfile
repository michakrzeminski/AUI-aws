FROM node:0.10

ENV user micro
RUN groupadd --system $user 
RUN useradd --system --create-home --gid $user $user

COPY . /home/$user/
WORKDIR /home/$user
RUN chown $user --recursive .
USER $user
RUN npm install

EXPOSE 3000
CMD ["node", "app/server.js"]
