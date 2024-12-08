# Build stage
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# set npm registry
RUN npm config set registry https://registry.npmmirror.com/
COPY package.json package-lock.json ./
# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build





# Run stage
FROM node:18-alpine AS runner

# Set the working directory
WORKDIR /app

# set npm registry
# RUN npm config set registry https://registry.npmmirror.com/

# copy file 
COPY --from=builder --chown=app:app /app/.next/standalone ./
COPY --from=builder --chown=app:app /app/public ./public
COPY --from=builder --chown=app:app /app/.next/static ./.next/static
# COPY --from=builder --chown=app:app /app/ecosystem.config.js ./ecosystem.config.js

# Install PM2 globally
# RUN npm install pm2 -g

# Install dependencies
# RUN npm install --production
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 5173

CMD ["node", "server.js"]
# 这种模式还没有跑通
# CMD ["pm2-runtime", "ecosystem.config.js","--daemon"]