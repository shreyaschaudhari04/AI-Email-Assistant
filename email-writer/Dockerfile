# Use an official OpenJDK runtime as the base image
FROM openjdk:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy Maven wrapper and pom.xml
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Copy source code
COPY src ./src

# Give execute permission to mvnw
RUN chmod +x mvnw

# Build the app inside the container
RUN ./mvnw clean package -DskipTests

# Expose the port your app runs on
EXPOSE 8080

# Run the jar file
CMD ["java", "-jar", "target/your-app-name.jar"]
