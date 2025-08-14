#!/bin/bash

docker-compose down -v
docker-compose up -d
echo "Banco de dados rodando com sucesso!"