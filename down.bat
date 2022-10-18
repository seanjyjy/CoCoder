kubectl delete -f k8s/manifests/redis-matching-deployment.yaml
kubectl delete -f k8s/manifests/user-deployment.yaml
kubectl delete -f k8s/manifests/question-deployment.yaml
kubectl delete -f k8s/manifests/collaboration-deployment.yaml
kubectl delete -f k8s/manifests/matching-deployment.yaml
kubectl delete -f k8s/manifests/frontend-deployment.yaml
kubectl delete -f k8s/manifests/ingress.yaml