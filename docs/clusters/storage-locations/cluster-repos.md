---
sidebar_position: 3
sidebar_label: Cluster Repos
---

# Storing clusters in a separate repo

If you plan on hosting multiple projects on one cluster, you may want to move the cluster definitions to a standalone repo so they can be shared.

When using a separate cluster repo, you will also need to define **access control** within that repo.

## Setting up a new cluster-only repo

If you have modmon-cli installed **globally**, you can run:
```shell
modmon create cluster-repo
```

Which will scaffold a bare-bones modmon master repo with only clusters and access control.

## Common Concerns

### Already added your cluster to a project repo?
Modmon CLI makes it easy to migrate - run `modmon export clusters` from your project's master repo.
