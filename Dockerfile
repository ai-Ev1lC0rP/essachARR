# Use Node 18 alpine as base image
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Development stage
FROM base AS development
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# Test stage
FROM base AS test
ENV CI=true
RUN npm install
COPY . .
CMD ["npm", "test", "--watchAll=false"]

# Production stage
FROM base AS production
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
