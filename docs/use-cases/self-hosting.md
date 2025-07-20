---
sidebar_position: 2
---

# Self-Hosting

Hosting should be easy - and while we have some amazing tools to make it *easier*, there are still a lot of things involved with self-hosting a project if you want to keep it secure and operational.

Modmon is the glue between a few of these amazing tools, reducing the friction of DevOps for self-hosted projects on any infrastructure. Modmon is 100% open source and MIT licensed, so you are free to own your own cluster and projects.

We have built-in support for things that help with self-hosting:

- SSH Tunnels / Virtual DNS
- Docker
- Docker Compose/Swarm
- Deployments
- Databases (Postgres, MySQL, MongoDB, etc)
- Search Engines (Elasticsearch, MeiliSearch, Typesense, etc)
- Caches (Redis, Memcached, etc)
- Tunnels (such as Ngrok or Cloudflare Tunnel)
- Secrets (such as Hashicorp Vault)
- Monitoring (such as Prometheus, Grafana, etc)

We include these "big league" tools with simplified pre-configured setups and configs.

## Streamlined Services

You can simply add things to your project with simple commands such as:

```shell
modmon add database

> Which database do you want to add?
> 1. Postgres
> 2. MySQL
> 3. MongoDB
> 4. Redis
> 5. Memcached
> 6. Custom
```

This will add a database to your project, and configure it to work with your cluster. It will handle the following automatically for any supported database:

- Database creation on all environments
- Connection to the Docker network for all environments
- Database user creation/permissions on all environments
- Backups / Snapshots
- Provide ENV variables to all applications based on the `modmon.yaml`
- Apply best practices for database security and hardening

So, modmon is not trying to reinvent the wheel - it is simply a tool that aims to glue together a toolset and GitOps-based workflow to make managing infrastructure effortless.

## ARM Support

Ensuring that we always offer full support for ARM-based hardware is a top priority for us. Whether you are running on a Raspberry Pi, a Macbook Air, or a cloud-hosted ARM server, we will make sure that everything works as expected.

However, *you* as a developer do not need to support ARM if you do not want to within your project.

## Adding a Node

Adding a node to your cluster is as simple as:

```shell
modmon add node
> Which cluster would you like to add a node to?
> 1. Local
> 2. Production

> Please enter the IP address of the new node:
> 10.0.0.10

> Please choose an auth method:
> 1. SSH Key
> 2. Username/Password

> Please enter the SSH key to use:
> ~/.ssh/id_rsa

> Installing modmon-server on 10.0.0.10...
> Installation complete - please wait for the node to become ready. You can check the status with:
> `modmon status`
```

It can be made even easier by using a pre-configured provider:

```shell
modmon add node --provider vultr
> Which cluster would you like to add a node to?
> 1. Local
> 2. Production

> Please select the region to use:
> 1. New York (EWR1)
...

> Please choose a plan category:
> 1. Optimized Compute
...

> Please choose a plan:
| ID | Name | Cores | RAM | Disk |
|----|------|-------|-----|------|
| 1  | 1GB  | 1     | 1GB | 10GB |
| 2  | 2GB  | 2     | 2GB | 20GB |
| 3  | 4GB  | 4     | 4GB | 40GB |
| 4  | 8GB  | 8     | 8GB | 80GB |
| 5  | 16GB | 16    | 16GB| 160GB|

> Installing modmon-server on 10.0.0.10...
> Installation complete - please wait for the node to become ready. You can check the status with:
> `modmon status`
```

## Node Maintenance

Modmon Server keeps all nodes up-to-date with the latest OS packages, and applies security hardening. It also handles the installation of Docker and Swarm/Compose, and ensures that all services are running. Modmon Server is also responsible for managing the Docker network, which is used to connect all services.
