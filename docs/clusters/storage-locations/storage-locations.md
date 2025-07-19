---
sidebar_position: 1
sidebar_label: Storage Locations
---

# Cluster Storage Locations
 
Cluster data can be stored at the project-level for single tenancy or in a separate repo if you plan to host multiple projects on the same cluster.

The config for a project's Master Repo will look like this:

### Within the repo (default)
```yaml
# modmon.yaml
clusters: 'project' # This will use the projects ./modmon/clusters/*.yaml
```

### A separate 'clusters' repo

Using this approach, you can share clusters across multiple projects.

```yaml
#modmon.yaml
clusters: 'git@github.com:modmonhq/modmon-clusters.git'
```

:::warning[Access Control on Cluster Repo]
You'll need to make sure that everyone can access the clusters repo
:::
