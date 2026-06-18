# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# This Dockerfile uses Python Docker Official Image
FROM node:alpine


WORKDIR /app

# Create a non-privileged user that the app will run under.
# See https://docs.docker.com/go/dockerfile-user-best-practices/
COPY . .


RUN npm install 


# Switch to the non-privileged user to run the application.
USER node

# Copy the source code into the container.

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD ["node", "/src/index.js"]   



