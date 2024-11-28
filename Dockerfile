


# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./


# set npm registry
RUN npm config set registry https://registry.npmmirror.com/

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Install PM2 globally
RUN npm install -g pm2

# Expose the port the app runs on
EXPOSE 5173

# Start the application with PM2
# CMD ["pm2-runtime", "start", "npm", "--name", "my-next-app", "--", "start"]

CMD ["pm2-runtime", "ecosystem.config.js","--daemon"]



