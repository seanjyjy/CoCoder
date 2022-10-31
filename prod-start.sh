aws eks update-kubeconfig --name pp-cluster --region ap-southeast-1
kubectl apply -f k8s/setup/aws-auth.yaml
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.4.0/deploy/static/provider/aws/deploy.yaml
kubectl wait --namespace ingress-nginx --for=condition=ready pod --selector=app.kubernetes.io/component=controller --timeout=120s
kubectl wait --namespace ingress-nginx --for=condition=complete job/ingress-nginx-admission-patch --timeout=30s 
kubectl create secret generic user-svc-secrets --from-env-file ./user-service/.env
kubectl create secret generic history-svc-secrets --from-env-file ./history-service/.env
kubectl apply -f k8s/prod/frontend-deployment.yaml
kubectl apply -f k8s/prod/user-deployment.yaml
kubectl apply -f k8s/prod/matching-deployment.yaml
kubectl apply -f k8s/prod/collaboration-deployment.yaml
kubectl apply -f k8s/prod/history-deployment.yaml
kubectl apply -f k8s/prod/question-deployment.yaml
kubectl apply -f k8s/prod/communication-deployment.yaml
kubectl apply -f k8s/prod/ingress.yaml

