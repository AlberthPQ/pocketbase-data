# Imagen base ligera
FROM alpine:3.17

# Copiar archivos de PocketBase
WORKDIR /app
COPY pocketbase /app/pocketbase
COPY pb_data /app/pb_data
COPY pb_migrations /app/pb_migrations

# Permisos y puerto
RUN chmod +x /app/pocketbase
EXPOSE 8090

# Comando de inicio
CMD ["/app/pocketbase", "serve", "--http=0.0.0.0:8090"]






