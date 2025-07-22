---
sidebar_position: 1
sidebar_label: Intro
---

# Intro to depots

The idea of a depot is that all code a developer will need for a project will be in one place - but tracked separately (this is *not* to be confused with a [monorepo](https://en.wikipedia.org/wiki/Monorepo)).

You will almost always want to put all of your project's services in the depot, but there may be instances where you can't (such as if you don't own the VC for the code). In this case, you'll want to simply add it as a standalone docker image for pulling.

You may also want to include internal tooling that is useful for the developers - and if you don't want to deploy the internal tooling to clusters, you can **disable** specific depot items for certain environments.
