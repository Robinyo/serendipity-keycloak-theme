<h1 align="center">Developer Documentation</h1>

<p align="center">
  <b>The goal of this guide is to help you build the theme related assets used by Serendipity's Identity Service.</b></br>
</p>

## Docker

### Build an Image

You can use the sample [Dockerfile](https://github.com/Robinyo/serendipity-keycloak-theme/blob/master/Dockerfile) to build a Keycloak image:

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
robinyo/keycloak   latest              b937f8b599f0        21 minutes ago      643MB
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

You can use:

```
docker inspect keycloak
``` 

To verify that the bind mount was created correctly (look for the **Mounts** section):

```
"Mounts": [
    {
        "Type": "bind",
        "Source": "/Users/robferguson/workspace/Robinyo/serendipity",
        "Destination": "/serendipity",
        "Mode": "",
        "RW": true,
        "Propagation": "rprivate"
    },
    {
        "Type": "bind",
        "Source": "/Users/robferguson/workspace/Robinyo/serendipity-keycloak-theme/theme",
        "Destination": "/opt/jboss/keycloak/themes/serendipity",
        "Mode": "",
        "RW": true,
        "Propagation": "rprivate"
    }
]
```

Navigate to the Welcome page: http://localhost:10001 and then login to the Administration Console using the KEYCLOAK_USER (admin) and KEYCLOAK_PASSWORD (secret) credentials.

## ❯ Docker Commands

Docker CLI management commands start with `docker`, then a space, then the management category, then a space, and then 
the command. A flag with two dashes in front is the full name of the flag. A flag with one dash is a shortcut for the 
full flag name.

To list all running containers:

```
docker container ls
```

To check an environment variable inside your container:

```
docker exec [name] printenv [variable]
```

For example:

```
docker exec flowable printenv FLOWABLE_IDM_LDAP_ENABLED
```

To check the environment variables inside your container:

```
docker inspect -f \
  '{{range $index, $value := .Config.Env}}{{println $value}}{{end}}' \
  [name] | grep [value]
```

For example:

```
docker inspect -f \
  '{{range $index, $value := .Config.Env}}{{println $value}}{{end}}' \
  flowable | grep FLOW
```

To print logs:

```
docker logs [name]
```

For example:

```
docker logs keycloak
```

To start a shell session inside your container that you can interact with through your terminal:

```
docker exec -it [name] /bin/bash
```

`-i` is short for `--interactive`. Keep STDIN open even if unattached.
`-t` is short for `--tty`. Allocates a [pseudo terminal](http://en.wikipedia.org/wiki/Pseudo_terminal) that connects your terminal with the container’s STDIN and STDOUT.

For example:

```
docker exec -it flowable sh
```

You can stop a container using the following command:

```
docker container stop [name]
```

For example:

```
docker container stop keycloak
```

You can remove a container using the following command:

```
docker container rm [name]
```

For example:

```
docker container rm keycloak
```

Where is your image? It’s in your machine’s local Docker image registry:

```
docker image ls
```

![divider](../divider.png)

## ❯ Resources

### Docker Resources

* Docker docs: [Use bind mounts](https://docs.docker.com/storage/bind-mounts/)

### Keycloak Theme Resources

* Keycloak docs: [Server Developer Guide - Themes](https://www.keycloak.org/docs/latest/server_development/#_themes)

![divider](../divider.png)
