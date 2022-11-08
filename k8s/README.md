# Deployment

## Contents

**kind**
Contains configurations for creation of kind cluster for deployment to local kubernetes cluster.

**manifests**
Contains kubernetes manifests used for deployment to local kubernetes cluster.

**prod**
Contains kubernetes manifests used for deployment to AWS Elastic Kubernetes Service cluster.

**setup**
Contains aws configurations and kubernetes manifests used in setting up of the production environment.

## Deployment to production

### Setup AWS CLI

1. Install the [AWS CLI](https://aws.amazon.com/cli/)
2. Edit `~/.aws/credentials` to include the service account credentials

```
[github]
aws_access_key_id = ...
aws_secret_access_key = ...
```

3. set the AWS_PROFILE env var e.g. `set AWS_PROFILE=github` (windows)

### Create ECR repository

```
aws ecr create-repository --repository-name cc-frontend

aws ecr put-lifecycle-policy --repository-name "cc-frontend" --lifecycle-policy-text "file://k8s/setup/lifecycle-policy.json"
```

### Setup EKS cluster

1. Create cluster

```
aws eks create-cluster --name cc-cluster --role-arn arn:aws:iam::272468461328:role/AWSEKSClusterRole --resources-vpc-config subnetIds=subnet-076a17f5ca5bae994,subnet-0010b6ee064f2255d,subnet-0a81a6c9fd2eb5ec8,subnet-0e47232dad499cc72
```

2. Create nodegroup

```
aws eks create-nodegroup --cluster-name cc-cluster --nodegroup-name cc-nodegroup --disk-size 10 --subnets subnet-076a17f5ca5bae994 subnet-0010b6ee064f2255d subnet-0a81a6c9fd2eb5ec8 subnet-0e47232dad499cc72 --node-role arn:aws:iam::272468461328:role/AWSEKSNodeRole --instance-types t3.medium --scaling-config minSize=0,maxSize=2,desiredSize=1
```

3. Create `.env.prod` files in user service and history service with the relevant environment variables

4. Run the `prod-start.sh` bash script
