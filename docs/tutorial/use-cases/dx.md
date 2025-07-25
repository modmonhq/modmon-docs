---
sidebar_position: 1
---

# DX

Great DX is more than just nice onboarding. Modmon also features a few tools to help you build the best possible local DX for your complicated projects.

## Faster Onboarding

Onboarding new developers to a project can be a painful process, especially when you take the route of monolith or modular monolith architecture. Modmon aims to make this process as smooth as possible, by automating the setup of local development environments.

Developers will simply clone the master repo, and run the following:

```shell
npm install -g @modmon/cli
git clone git@github.com:mycompany/my-app.git # Clone the master repo
cd my-app
modmon install
```

This will download all the repositories and dependencies, and create a local development environment with all the needed services.

## Modmon CLI

Experiment too hard and now everything is broken locally? Run a single command to rebuild your project and get back to work.

```bash
modmon rebuild
```

## Snapshots

Modmon can take snapshots of your project's state and restore it at any time. This is useful for testing and debugging.

```bash
modmon snapshot

# Restore the snapshot
modmon restore
> Which snapshot do you want to restore?
> 1. 2025-02-05-10-40-15
```

## Modmon UI

If CLI is not your style, Modmon UI is a beautiful and easy way to interact with your project. Everything in the CLI is also available in the UI. The UI runs locally and is accessible from your browser at `http://modmon.local`. It can connect to remote clusters via secure SSH tunnels.
