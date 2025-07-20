---
sidebar_position: 7.5
---

# Tech Stack

The following is a list of the technologies used per component of modmon.

## Components

### modmon-server

- [Go](https://go.dev/)
- [Buffalo](https://gobuffalo.io/)

### modmon-cli

- [Node](https://nodejs.org/en/)
- [ink](https://github.com/vadimdemedes/ink)

### modmon-ui

- [Vue](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)

### modmon-docs

- [Docusaurus](https://docusaurus.io/)

## Rationale

By nature, the creator of the project is a PHP developer. But not all devs have PHP installed and the ones that don't use it are less likely to try a project that uses it. Making any piece of modmon in PHP would require all devs to set up a PHP environment, which was seen as a barrier to entry. The upcoming official prefab/community recipe repository will be written in PHP/Laravel, however, and the "marketing" / .org site will be a Statamic site. Those will be fully open-sourced when they are stable.

On the other hand, almost every PHP dev has Node installed. So, Node was chosen as the primary platform for client-side development.

Go was chosen for the modmon-server backend, as it is a compiled language that is easy to install and run on any platform. It is very fast, and has a very small memory footprint. It has great integration with Docker, which is the primary use case for modmon-server.

Everything was chosen to be the best tool for the job, and the result is the current tech stack.
