# Use an OpenJDK 21 base image
FROM eclipse-temurin:21-jdk

# Set working directory
WORKDIR /app

# Copy Maven wrapper and build files
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Give execute permission to mvnw
RUN chmod +x mvnw

# Download dependencies first to leverage Docker layer caching
RUN ./mvnw dependency:go-offline

# Copy the rest of the source code
COPY src ./src

# Build the app
RUN ./mvnw clean package -DskipTests

# Expose the application port
EXPOSE 8080

# Run the JAR
CMD ["java", "-jar", "target/email-writer-0.0.1-SNAPSHOT.jar"]
