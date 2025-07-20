---
sidebar_position: 1
---

# Faster Onboarding

Onboarding new developers to a project can be a painful process, especially when you take the route of monolith or modular monolith architecture. Modmon aims to make this process as smooth as possible, by automating the setup of local development environments.

Developers will simply clone the master repo, and run the following:

```shell
npm install -g @modmon/cli
git clone git@github.com:mycompany/my-app.git # Clone the master repo
cd my-app
modmon install
```
