FROM alpine:3.17

WORKDIR /app

# Copiar binario y datos
COPY pocketbase /app/pocketbase
COPY pb_data /app/pb_data
COPY pb_migrations /app/pb_migrations

# Permisos
RUN chmod +x /app/pocketbase && \
    mkdir -p /app/pb_data && \
    chmod -R 777 /app/pb_data

# Exponer (informativo)
EXPOSE 8090

# Ejecutar usando la variable PORT si existe, si no usar 8090 por defecto
CMD ["sh", "-c", "/app/pocketbase serve --http=0.0.0.0:${PORT:-8090} --dir /app/pb_data"]




