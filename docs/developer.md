# Serendipity Keycloak Theme

## Docker

### Build an Image

You can use the sample Dockerfile to build a Keycloak image:

```
docker build -t robinyo/keycloak .
```

**Note:** Replace `robinyo` with your Docker Hub username.

Where is your image? It’s in your machine’s local Docker image registry:

```
docker image ls
```

You should see output like:

```
REPOSITORY         TAG                 IMAGE ID            CREATED             SIZE
robinyo/keycloak   latest              39819e4c19c9        12 minutes ago      284MB
```

### Run the Image

For example:

```
docker container run -d --name keycloak \
  -p 10001:8080 \
  --mount type=bind,source=/Users/robferguson/workspace/Robinyo/serendipity-keycloak-theme/theme,target=/opt/jboss/keycloak/themes/serendipity \
  -v "$(pwd)":/serendipity \
  -e KEYCLOAK_USER=admin \
  -e KEYCLOAK_PASSWORD=secret \
  robinyo/keycloak

```

To list all running containers:

```
docker container ls
```

To stop a container:

```
docker container stop [name]
```

For example:

```
docker container stop keycloak
```

To remove a container:

```
docker container rm CONTAINER_ID
```

To delete an image:

```
docker image rm IMAGE_ID --force
```

To remove all unused objects:

```
docker system prune
```
