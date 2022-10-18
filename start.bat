kind create cluster --name kind-1 --config k8s/kind/cluster-config.yaml
kind load docker-image pp-frontend --name kind-1
kind load docker-image pp-user --name kind-1
kind load docker-image pp-matching --name kind-1
kind load docker-image pp-collaboration --name kind-1
kind load docker-image pp-question --name kind-1
kind load docker-image pp-history --name kind-1
kubectl create secret generic user-svc-secrets --from-env-file ./user-service/.env
kubectl create secret generic history-svc-secrets --from-env-file ./history-service/.env
kubectl apply -f k8s/manifests/redis-matching-deployment.yaml
kubectl apply -f k8s/manifests/redis-collab-deployment.yaml
kubectl apply -f k8s/manifests/user-deployment.yaml
kubectl apply -f k8s/manifests/question-deployment.yaml
kubectl apply -f k8s/manifests/history-deployment.yaml
kubectl apply -f k8s/manifests/collaboration-deployment.yaml
kubectl apply -f k8s/manifests/matching-deployment.yaml
kubectl apply -f k8s/manifests/frontend-deployment.yaml
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
kubectl wait --namespace ingress-nginx --for=condition=ready pod --selector=app.kubernetes.io/component=controller --timeout=120s
kubectl wait --namespace ingress-nginx --for=condition=complete job/ingress-nginx-admission-patch --timeout=30s 
kubectl apply -f k8s/manifests/ingress.yaml
kubectl get ingress -w