# CS3219-AY22-23-Project-Skeleton

This is a template repository for CS3219 project.

## Local Testing of Services

To run services individually, refer to the README.md in each services' folder. (todo)

## Local Testing with Docker

### Prerequusires:

- Installed [Docker](https://docs.docker.com/get-docker/)

### Start up:

1. From the root of the repository, run `docker-compose up --build`
2. View web page at `http://localhost`
3. Services can be accessed at `http://localhost/api/{service_name}`

### Tear down:

1. Run `docker-compose down`

## Local Deployment (Docker + Kubernetes)

### Prerequisites:

- Installed [Docker](https://docs.docker.com/get-docker/)
- Installed [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/)
- Installed [kind](https://kind.sigs.k8s.io/docs/user/quick-start/)
- (Only tested on Windows)

### Start up:

1. From the root of the repository, run `docker-compose build`.
2. Then run `./test.sh` (todo)

### Tear down:

1. Run `kind delete cluster --name kind-1`

### Debugging

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
