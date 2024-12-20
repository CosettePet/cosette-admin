# Use Node.js 18 Alpine image as the base image for all stages
FROM node:18-alpine AS base

# Install necessary dependencies
FROM base AS deps
# Install libc6-compat for compatibility
RUN apk add --no-cache libc6-compat  
WORKDIR /app
# Set npm registry to mirror
ENV NPM_CONFIG_REGISTRY=https://registry.npmmirror.com/  

# Copy the package.json and lock files, then install dependencies
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
# Use Yarn if yarn.lock is present
# Use npm if package-lock.json is present
# Use pnpm if pnpm-lock.yaml is present
# Exit if no lockfile is found
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \  
  elif [ -f package-lock.json ]; then npm ci; \ 
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \  
  else echo "Lockfile not found." && exit 1; \ 
fi

# Build the application
FROM base AS builder
WORKDIR /app
# Copy installed dependencies from the 'deps' stage
COPY --from=deps /app/node_modules ./node_modules  
# Copy the rest of the application code
COPY . .  


RUN \
  # Build using Yarn if yarn.lock is present
  if [ -f yarn.lock ]; then yarn run build; \  
  # Build using npm if package-lock.json is present
  elif [ -f package-lock.json ]; then npm run build; \  
  # Build using pnpm if pnpm-lock.yaml is present
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \  
  # Exit if no lockfile is found
  else echo "Lockfile not found." && exit 1; \  
fi

# Run the application
FROM base AS runner
WORKDIR /app
# Set environment to production
ENV NODE_ENV production  
# Add system group for nodejs user
RUN addgroup --system --gid 1001 nodejs  
# Add system user for Next.js with UID 1001
RUN adduser --system --uid 1001 nextjs  

# Copy necessary files from the builder stage
COPY --from=builder /app/public ./public
RUN mkdir .next  # Create the .next directory
RUN chown nextjs:nodejs .next  # Change ownership of the .next directory

# Copy the compiled application from the builder stage and set the correct ownership
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to the non-root user 'nextjs'
USER nextjs  
# Expose port 5173 for the application
EXPOSE 5173  
# Set the port to 5173
ENV PORT 5173  
# Allow the app to be accessed from any IP
ENV HOSTNAME "0.0.0.0"  
# Run the app using Node.js
CMD ["node", "server.js"]  
