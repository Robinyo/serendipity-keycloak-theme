<h1 align="center">Quick Start Guide</h1>

### Step 1. Set up the Development Environment 

You need to set up your development environment before you can do anything.

Open a terminal window and install [Node.js (and npm)](https://nodejs.org/en/download/) and [git](https://git-scm.com/) if they are not already on your machine.

> Verify that you are running at least Node.js version 10.x or greater and npm version 6.x or greater by running node -v and npm -v in a terminal/console window. Older versions produce errors, but newer versions are fine.

Then install [Sass](https://sass-lang.com) globally:

```
npm install -g sass
```

Now you'll be able to run the `sass` executable (from the command line) to compile .sass and .scss files to .css files. For example:

```
sass --load-path=/Users/robferguson/workspace/Robinyo/serendipity-keycloak-theme/node_modules login.scss:login.css
```

You can also setup a File Watcher in your IDE, for example:

<p align="center">
  <img src="https://github.com/Robinyo/serendipity-keycloak-theme/blob/master/screen-shots/intellij-idea-file-watcher.png">
</p>

### Step 2. Clone the project 

Change the current working directory to the location where you want the cloned directory to be:

```
cd ~/workspace
```

Clone the project by running the following command:

```
git clone https://github.com/Robinyo/serendipity-keycloak-theme
cd serendipity-keycloak-theme
```

### Step 3: Build a Keycloak Image

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

### Step 4: Launch Keycloak

To launch Keycloak:

```
docker container run -d --name keycloak \
  -p 10001:8080 \
  --mount type=bind,source=/Users/robferguson/workspace/Robinyo/serendipity-keycloak-theme/theme,target=/opt/jboss/keycloak/themes/serendipity \
  -v "$(pwd)":/serendipity \
  -e KEYCLOAK_USER=admin \
  -e KEYCLOAK_PASSWORD=secret \
  robinyo/keycloak
```

Because we want to preview our changes as we make them we'll use a [bind mount](https://docs.docker.com/storage/bind-mounts/) to mount our theme directory into the container.

**Note:** The name of the target directory (serendipity) becomes the name of the theme.

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

Navigate to the Welcome page: http://localhost:10001
 
Login to the Administration Console using the KEYCLOAK_USER (admin) and KEYCLOAK_PASSWORD (secret) credentials.
