# CoCoder

CoCoder is an interview preparation platform and peer matching system where sutdents can find peers to practice interview questions together.

Visit CoCoder at https://cocoder.link

## Development Guide

### Run Individual Services

To run services individually, refer to the README in each services' folder.

1. [Frontend](frontend/README.md)
2. [User Service](user-service/README.md)
3. [Matching Service](matching-service/README.md)
4. [Collaboration Service](collaboration-service/README.md)
5. [History Service](history-service/README.md)
6. [Question Service](question-service/README.md)
7. [Communication Service](communication-service/README.md)

### Local Testing with Docker

**Prerequisites**

- Installed [Docker](https://docs.docker.com/get-docker/)

**Start up**

From the root of the repository, run

```
docker compose up --build
```

View the webpage at http://localhost

**Tear down**

```
docker compose down
```

### Local Deployment (Docker + Kubernetes)

**Prerequisites**

- Installed [Docker](https://docs.docker.com/get-docker/)
- Installed [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/)
- Installed [kind](https://kind.sigs.k8s.io/docs/user/quick-start/)

**Start up**

1. In user service, copy the `.env.sample` file to `.env.test` and set `USER_SVC_DB_URI` to the MongoDB Cloud database URL for user service
2. In history service, copy the `.env.sample` file in `.env.test` and set `HISTORY_SVC_DB_URI` to the MongoDB Cloud database URL for history service
3. From the root of the repository, run `docker compose build`
4. Then run the `start.sh` bash script
5. To setup the horiontal pod autoscalers:
   3.1. Run `kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml` to install the metrics server
   3.2. Run `kubectl -nkube-system edit deploy/metrics-server` then manually edit the Deployment manifest to add a flag `--kubelet-insecure-tls` to deployment.spec.containers[].args[]
   3.3. Run `kubectl -nkube-system rollout restart deploy/metrics-server`
   3.4. Run `kubectl apply -f k8s/manifests/hpa.yaml`
6. Visit the webpage at `http://localhost`

**Tear down**

```
kind delete cluster --name kind-1
```

**Debugging**

1. Check that deployments are running

```
kubectl get deployment
```

2. Check that services are running

```
kubectl get service
```

3. Check that Ingress Controller is ready

- May need to wait 1-2 minutes to be ready

```
kubectl -n ingress-nginx get deploy -w
```

4. Check that ingress is ready

- Wait for the "ADDRESS" column to show "localhost"

```
kubectl get ingress -w
```

5. Check backend service logs

   1. Get pod name of service with `kubectl get po`

   2. Check logs with `kubectl logs pod-name`

6. Check that the metrics server is running:

```
kubectl get pods --all-namespaces | findstr metrics-server
```
