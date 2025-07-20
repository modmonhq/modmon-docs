---
sidebar_position: 1
---

# Modmon Intro

:::danger[Pre-alpha software]
Modmon is pre-alpha software, very much in-development - we do NOT recommend using it for production use at the moment.
:::

:::tip[Help shape the future]
We're looking for insights and ideas from the community - please share your thoughts and feedback (good or bad) on [GitHub Discussions](https://github.com/modmonhq/modmon/discussions).
:::

The first question is: what is Modmon? Yet another tool / technology we have to learn? The answer is - yes and no! The goal of the modmon project is to provide small/medium teams with a simplified deployment system that can be deployed anywhere - even Raspberry Pis - with a Gitops-focused approach. Not every project has the resources for a full-time devops person/team - Modmon can fill in a few gaps to simplify devops operations for most apps.

It's inspired by [Lando](https://lando.dev), which simplifies *local* PHP development and Docker, and [Coolify](https://coolify.io). Modmon aims to simplify and unify production *and* local deployment of any app, running in containers or as a binary. It is heavily customizable depending on your needs and workflows (and hopes to become even more customizable over time).

Modmon consists of a few components - we will overview those below. Read more about our vision of [self hosting here](/docs/use-cases/self-hosting).

## Software Components

- [modmon](https://github.com/modmonhq/modmon): This is the package installed in your master repo providing the full local
  developer experience and ability to manage remote clusters.
- [modmon-server](https://github.com/modmonhq/modmon-server): This is a lightweight Go application that runs on production
  clusters to manage and maintain the servers and deployments.
- [modmon-cli](https://github.com/modmonhq/modmon-ui): This is the CLI tool for managing your application and clusters. It is
  included by default in `modmon`. It connects securely via SSH tunnels to remote servers, meaning no ports need to be opened to use.
- [modmon-ui](https://github.com/modmonhq/modmon-ui): This is a Vue UI for managing your application and clusters. It can
  be installed automatically by modmon during initial setup or added later. It wraps all CLI utilities into a webapp.

## Principles

### Environment

An environment is a distinct instance of your application, running in a specified manner.

### Node

A node is a machine, virtual or physical, that runs `modmon-server`, Docker, and the deployed code.

During setup, modmon-server will:

1. Update all OS packages
2. Apply security settings / harden the installation
3. Install Docker / Swarm / Compose (depending on Cluster settings)

### Cluster

A cluster is either a single node or multiple nodes working together as one. Clusters operate independently of each other, but can all be managed together via the CLI and UI.

:::tip
You will always deploy to a "cluster", even if it is just one node.
:::

It would be considered best practices to use different clusters for different environments, but it is possible to run multiple environments on a single cluster. Clusters can also run multiple projects.

### Project

A project is a distinct set of services to deploy, all defined in a Master Repo (see [below](#master-repo)).

### Blueprints

Blueprints are a simple, declarative way to define what your stack consists of - your app's components, services, and dependencies. They can be created using the Modmon CLI, UI, or by editing YAML files directly. Blueprints are ultimately compiled into docker-compose.yaml or docker-stack.yaml files that Modmon uses to deploy your app.

### Recipes

Recipes determine how to deploy your app. While blueprints focus on what your stack contains, recipes are more focused on the deployment steps and processes to get your app running in different environments.

### Master Repo

Every project needs a master repo, which contains a few (light-touch) config files. The master repo serves as the central control point for your entire deployment ecosystem, containing configuration, access controls, and orchestration logic while keeping actual application code separate. The master repo follows a "configuration as code" philosophy, where your infrastructure, deployment settings, and team access are all version-controlled and easily reproducible across environments. Most of it can be auto-generated using CLI tools, flows, prefabs, and recipes.

#### Repository Structure

```filetree
my-awesome-project/
├── .modmon/
│   ├── modmon.yaml          # Main configuration (see below)
│   ├── access.yaml          # User access controls (see below)
│   └── pubkeys/             # SSH public keys directory
│       ├── alex             # Alex's primary SSH key
│       ├── alex-laptop      # Alex's laptop SSH key
│       ├── sarah            # Sarah's SSH key
│       ├── mike             # Mike's SSH key
├── .env/
│   ├── development.env     # Local development environment
│   ├── integration.env     # Integration testing environment
│   ├── uat.env             # User acceptance testing environment
│   ├── staging.env         # Staging environment
│   └── production.env      # Production environment
├── depot/                  # Auto-managed repositories (git-ignored)
│   ├── frontend-app/       # Cloned from git@github.com:mycompany/frontend-app.git
│   ├── api-service/        # Cloned from git@github.com:mycompany/api-service.git
│   └── notification-service/ # Cloned from git@github.com:mycompany/notification-service.git
├── recipes/               # Recipes are scripts for various purposes (WIP)
├── .gitignore             # Excludes depot/ and generated files
├── install.sh             # Auto-generated bootstrap script
└── docker-stack.yaml      # Auto-generated Docker Swarm configuration
```

#### Core Configuration Files

:::info[Active development]
The structure of the configuration files is still being finalized. The following are provided as an example for now.
:::

`.modmon/modmon.yaml` - The heart of your deployment configuration

```yaml
# Example modmon.yaml structure
version: 1.0
deploy:
  type: 'swarm'
  provider: 'aws'

environments:
  local:
  staging:
    deploy-on:
      - created: 'git:tag'
  production:
    deploy-on:
      - hook: 'staging_tests_passed'

repos:
  my-app:
    url: git@github.com:mycompany/my-app.git
    type: docker
    image: my-app:{tag}
    database:
      databases:
        - app_db
      users:
        - app_user
    services:
      web:
        ports:
          - target: 8080
            published: 80
        depends_on:
          - postgres
          - redis

swarm:
  services:
    postgres:
      image: postgres:17
    redis:
      image: redis:7-alpine

databases:
  app_db:
    type: 'postgres'
    users:
      app_user:
        access: full
```

`.modmon/access.yaml` - Team access and permission management

```yaml
# Example access.yaml structure
users:
  alex:
    roles: admin
    keys: ['alex', 'alex-laptop']
    email: 'alex@example.com'
  sarah:
    roles: maintain
    keys: 'sarah'
    email: 'sarah@example.com'
  mike:
    roles: developer
    keys: 'mike'
    email: 'mike@example.com'
roles:
  admin:
    super: true
  maintain:
    - perm:deploy
    - perm:manage_users
    - role:developer
  developer:
    - perm:read_logs
    - perm:restart_services
```

#### The Depot Directory

The depot/ directory is where Modmon automatically clones your project repositories during setup. This approach provides several benefits:

- Separation of Concerns: Configuration and code remain separate but coordinated
- Atomic Operations: All repositories are managed together, ensuring consistency
- Git Independence: Each repo maintains its own Git history while being orchestrated centrally
- Easy Onboarding: New team members get the entire project with one command

#### Environment Management

:::info[Active development]
The structure of the configuration files is still being finalized. The following are provided as an example for now.
:::

Environment file stubs in .env/ serve as templates that Modmon uses to generate environment-specific configurations:

```dotenv
# This file contains scripted overwrites of various ENV values for modmon

APP_KEY={{SCRIPTS['app-key']}}
APP_ENV={{ENV}}
APP_DEBUG={{ENV != 'production' && ENV != 'staging'}}
APP_URL={{URL}}
FEATURE_FLAGS={{ENV === 'production'}}

DB_HOST={{DB['app_db'].HOST}}
DB_PORT={{DB['app_db'].PORT}}
DB_DATABASE={{DB['app_db'].DB}}
DB_USERNAME={{DB['app_db'].USER}}
DB_PASSWORD={{DB['app_db'].PASS}}

CACHE_DB_DATABASE={{DB['cache_db'].DB}}
CACHE_DB_PASSWORD={{DB['cache_db'].PASS}}

REDIS_HOST={{SERVICES['redis'].HOST}}
REDIS_PORT={{SERVICES['redis'].PORT}}

ELASTICSEARCH_HOST={{SERVICES['elasticsearch'].URL}}
ELASTICSEARCH_INDEX={{ENV}}_search_index

MAIL_MAILER=smtp
MAIL_HOST={{SECRETS['mail_host']}}
MAIL_PORT=587
MAIL_USERNAME={{SECRETS['mail_username']}}
MAIL_PASSWORD={{SECRETS['mail_password']}}
MAIL_ENCRYPTION=tls

LOG_CHANNEL=stack
LOG_LEVEL={{ENV === 'production' ? 'error' : 'debug'}}
```

#### Bootstrap and Generation

`install.sh` - Automatically generated script that:

- Clones all repositories defined in modmon.yaml
- Sets up local development environment
- Installs dependencies and configures services
- Generates necessary Docker configurations

`docker-stack.yaml` | `docker-compose.yaml` - Auto-generated Docker Swarm/Compose file that:

- Defines services based on your modmon.yaml configuration
- Applies environment-specific overrides
- Sets up networking and dependencies
- Configures volumes and secrets

## Is Modmon for me?

That is up to you - modmon aims to be as flexible as possible, but cannot meet all requirements for everyone! Larger organizations with full-time devops teams may be better off using K8s or custom pipelines. Our project must remain accessible for small/independent teams, so it may lack a few "enterprise" features.

But, if you'd lke to reduce long-term pain of onboarding developers, maintaining clusters and app deployments, feel free to hop on!

## What won't modmon do?

While Modmon can help with a lot, there are a few things you will need to do yourself (for now):

### Dockerize your app

Something that is up to you to do as a developer is Dockerize your app. Modmon will help you run the container and supporting services, but it relies on your app already running in a container.

A future version will aim to make it easy to Dockerize your app using prebuilt images and tools like:

- [Paketo Buildpacks](https://paketo.io/) - Cloud Native Buildpacks for popular languages
- [Dockerize](https://github.com/jwilder/dockerize) - Utility to simplify running applications in docker containers.
- [Spin](https://github.com/serversideup/spin) - PHP / Laravel / Symfony dockerization made easy
- [Nixpacks](https://github.com/railwayapp/nixpacks) - Auto-detects and builds Docker images from source code
- [Buildpacks](https://buildpacks.io/) - Cloud Native Buildpacks for automatic containerization
- [Docker Init](https://docs.docker.com/engine/reference/commandline/init/) - Docker's official tool for generating Dockerfiles
- [s2i (Source-to-Image)](https://github.com/openshift/source-to-image) - Builds Docker images from source code

While this portion is truly in our vision of the project, it's not something we can do properly without input from the community. Everybody builds apps differently. If you have any ideas, please let us know!

### Infrastructure Provisioning

- Provision cloud servers, VPCs, or networking infrastructure (you'll need to set up the nodes first - future versions will include this)
- Manage DNS records or SSL certificate generation/renewal (future versions will include this)
- Handle cloud-specific services like AWS RDS, S3, or load balancers

### Advanced Operations

- Provide comprehensive monitoring, logging, or alerting (beyond basic deployment status)
- Implement backup strategies for your databases or persistent data beyond basic snapshots
- Handle complex database migrations or schema management
- Perform auto-scaling based on traffic or resource usage (future versions will include this)

### CI/CD Pipeline Management

- Create complex build pipelines or artifact management
- Integrate with external testing services or quality gates
- Manage code review workflows or branch protection rules

### Security & Compliance

- Implement application-level security (authentication, authorization, input validation)
- Ensure compliance with industry standards (SOC2, HIPAA, etc.)
- Manage secrets rotation or advanced key management
- Perform penetration testing or security audits

### Will it ever do these things?

Some of these will never fit into the scope of Modmon, but for other "nice to have" features: Modmon is 100% open source and community-driven, so we welcome your ideas and contributions!

## License

Modmon is [MIT Licensed](https://en.wikipedia.org/wiki/MIT_License)
