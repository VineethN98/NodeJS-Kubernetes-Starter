# Nodejs-Kubernetes-Starter

The nodejs image used here can be found at this link: [vin884/nodejs-starter](https://hub.docker.com/repository/docker/vin884/nodejs-starter)

## Running the Deployment File
```
kubectl create -f deploy.yaml
```

The deployment name in the deploy.yaml is '**nodejs-deployment**'

## Exposing the Service
```
kubectl expose deployment nodejs-deployment --type="LoadBalancer"
```

## Accessing the application from external IP using Minikube
```
minikube service nodejs-deployment
```
