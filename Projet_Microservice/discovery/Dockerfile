FROM openjdk:21
VOLUME /tmp
EXPOSE 8080
COPY target/*.jar discovery.jar
ENTRYPOINT ["java","-jar","/discovery.jar"]