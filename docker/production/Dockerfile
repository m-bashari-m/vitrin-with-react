# Stage 1: Build the React Vite project
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the built application using Nginx
FROM nginx:alpine

# Remove the default Nginx configurations
RUN rm -rf /etc/nginx/conf.d/*

# Copy the custom Nginx configuration file
COPY ../../nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy the built React app from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the Nginx port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
