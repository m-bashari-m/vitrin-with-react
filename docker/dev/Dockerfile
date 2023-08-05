# Use an official Node runtime as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy project files
COPY . .

EXPOSE 3000

# Build the React app
CMD [ "npm" , "run" , "dev" ] 




