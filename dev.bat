docker build -f frontend/Dockerfile -t pp-frontend .
docker build -f user-service/Dockerfile -t pp-user .
docker build -f matching-service/Dockerfile -t pp-matching .
docker build -f history-service/Dockerfile -t pp-history .
docker build -f question-service/Dockerfile -t pp-question .
docker build -f collaboration-service/Dockerfile -t pp-collaboration .
docker build -f nginx/Dockerfile -t pp-nginx .
docker-compose -f docker-compose.dev.yml up
