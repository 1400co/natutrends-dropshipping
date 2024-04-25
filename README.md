# Construye la imagen y levanta el servicio usando Docker Compose
docker-compose up --build -d

```bash
docker build -t natutrends-web:latest .
docker run -d -p 3001:80 natutrends-web:latest

docker-compose up --build