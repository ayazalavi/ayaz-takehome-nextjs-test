FROM node:lts as app
WORKDIR /app

ENV NODE_ENV production

COPY package.json package-lock.json ./
COPY next.config.js ./
RUN npm install --frozen-lockfile

RUN npm run build


# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /my-project/next.config.js ./

EXPOSE 3000
CMD ["npm", "run", "start"]