<h1 align="center">Build Management</h1>

### Build

To package the distribution:

```
# chmod +x build.sh

./build.sh
```

Sample output:

```
Packaging the Serendipity Keycloak theme as 'serendipity-keycloak-theme-1.0.zip'
  adding: serendipity/
  adding: serendipity/account/
  adding: serendipity/account/resources/
  adding: serendipity/account/resources/css/
  adding: serendipity/account/resources/css/account.css (deflated 72%)
  adding: serendipity/account/resources/img/
  adding: serendipity/account/resources/img/favicon.ico
  adding: serendipity/account/resources/img/icon-sidebar-active.png
  adding: serendipity/account/resources/img/keycloak-logo.png (deflated 5%)
  adding: serendipity/account/resources/img/logo.png
  adding: serendipity/account/theme.properties (deflated 53%)

  ...

Removing tempory files and folders
Packaging complete
```
### Resources

### Docker Resources

* Docker docs: [Bind mounts](https://docs.docker.com/storage/bind-mounts/)

### Keycloak Docker Image Resources

* GitHub docs: [Docker image for Keycloak project](https://github.com/keycloak/keycloak-containers)
* GitHub docs: [Keycloak Server Docker image](https://github.com/keycloak/keycloak-containers/blob/master/server/README.md)

### Keycloak Theme Resources

* Keycloak docs: [Server Developer Guide - Themes](https://www.keycloak.org/docs/latest/server_development/#_themes)

### Keycloak Themes

* GitHub: [Keycloak Example Themes](https://github.com/keycloak/keycloak/tree/master/examples/themes)
* GitHub: [Material Design Theme for Keycloak](https://github.com/MAXIMUS-DeltaWare/material-keycloak-theme)
* GitHub: [Alfresco Keycloak Theme](https://github.com/Alfresco/alfresco-keycloak-theme)
