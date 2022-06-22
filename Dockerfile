FROM node:lts as dependencies
WORKDIR /takehome-nextjs-test
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

FROM node:lts as builder
WORKDIR /takehome-nextjs-test
COPY . .
COPY --from=dependencies /takehome-nextjs-test/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /takehome-nextjs-test
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /takehome-nextjs-test/public ./public
COPY --from=builder /takehome-nextjs-test/.next ./.next
COPY --from=builder /takehome-nextjs-test/node_modules ./node_modules
COPY --from=builder /takehome-nextjs-test/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]