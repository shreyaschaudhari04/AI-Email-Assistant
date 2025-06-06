# Use official OpenJDK 17 image
FROM openjdk:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy built jar file (adjust the name)
COPY target/*.jar app.jar

# Run the app
ENTRYPOINT ["java", "-jar", "app.jar"]
