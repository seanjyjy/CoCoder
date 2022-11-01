# Deployment

## Setup AWS CLI

1. Install the [AWS CLI](https://aws.amazon.com/cli/)
2. Edit `~/.aws/credentials` to include the service account credentials

```
[github]
aws_access_key_id = ...
aws_secret_access_key = ...
```

3. set the AWS_PROFILE env var e.g. `set AWS_PROFILE=github` (windows)

## Create ECR repository

```
aws ecr create-repository --repository-name cc-frontend

aws ecr put-lifecycle-policy --repository-name "cc-frontend" --lifecycle-policy-text "file://k8s/setup/lifecycle-policy.json"
```

## Setup EKS cluster

1. Create cluster

```
aws eks create-cluster --name cc-cluster --role-arn arn:aws:iam::272468461328:role/AWSEKSClusterRole --resources-vpc-config subnetIds=subnet-076a17f5ca5bae994,subnet-0010b6ee064f2255d,subnet-0a81a6c9fd2eb5ec8,subnet-0e47232dad499cc72
```

2. Create nodegroup

```
aws eks create-nodegroup --cluster-name cc-cluster --nodegroup-name peer-prep --disk-size 10 --subnets subnet-076a17f5ca5bae994 subnet-0010b6ee064f2255d subnet-0a81a6c9fd2eb5ec8 subnet-0e47232dad499cc72 --node-role arn:aws:iam::272468461328:role/AWSEKSNodeRole --instance-types t3.medium --scaling-config minSize=1,maxSize=2,desiredSize=1
```

3. Run `prod-start.sh`
