FROM jboss/keycloak:9.0.2

ENV KEYCLOAK_DEFAULT_THEME serendipity

COPY ./standalone-ha.xml /opt/jboss/keycloak/standalone/configuration/standalone-ha.xml
