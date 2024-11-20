# Build stage
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json ./

# Remove existing package-lock.json if it exists
RUN rm -f package-lock.json

# Install dependencies and generate a fresh package-lock.json
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080 (Cloud Run preferred port)
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]