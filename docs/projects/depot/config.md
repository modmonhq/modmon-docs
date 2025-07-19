---
sidebar_position: 2
sidebar_label: Configuring
---

# Configuring

Depots can be interacted with via the CLI or by YAML.

## CLI

### Add a depot item

```shell
modmon depot add
```

### Remove a depot item

```shell
modmon depot remove <repo-name>
```

## YAML

```yaml
# ./modman/depot.yaml
frontend:
  url: git@github.com:modmonhq/frontend-example.git
dev-tooling:
  url: git@github.com:modmonhq/tooling-example.git
  environments:
    - local
    - integration
```
