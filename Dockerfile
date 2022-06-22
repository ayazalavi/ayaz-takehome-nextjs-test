FROM node:lts as dependencies
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --frozen-lockfile

FROM node:lts as builder
WORKDIR /code
COPY . /code
COPY --from=dependencies /node_modules /code/node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /code
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /public /code/public
COPY --from=builder /.next /code/.next
COPY --from=builder /node_modules /code/node_modules
COPY --from=builder /package.json /code/package.json

EXPOSE 3000
CMD ["npm", "run", "start"]