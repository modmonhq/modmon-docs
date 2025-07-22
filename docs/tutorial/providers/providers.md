---
sidebar_position: 4.9
---

# Providers

:::info[Upcoming]
The "Providers" functionality is an upcoming feature.
:::

Modmon has the ability to automatically provision resources on a few supported cloud providers, as well as any terraform-compatible provider. You can also build your own provider using yaml configuration.

## Supported Providers

The following providers are currently supported using the official [providers repo](https://github.com/modmonhq/providers):

- [Edge](https://edge.network/) - [Docs](/docs/tutorial/providers/edge.md)
- [Vultr](https://www.vultr.com/) - Coming soon
- [DigitalOcean](https://www.digitalocean.com/) - Coming soon
- [Linode](https://www.linode.com/) - Coming soon
- [AWS](https://aws.amazon.com/) - Coming soon
- [Azure](https://azure.microsoft.com/) - Coming soon

## Using Providers

Providers are configured in the `cluster.yaml` file.

```yaml
# cluster/{clusterName}.yaml
provider: vultr
```

## Custom Providers

You can also build your own provider - see our [providers repo](https://github.com/modmonhq/providers) for examples.

The provider schema will be documented soon.

To use a custom provider, you will need to add the following to your cluster config:

```filetree
my-awesome-project/
├── .modmon/
│   └── providers/               # Custom providers
│       ├── my-custom-provider/  # Custom provider files
```

```yaml
# cluster/{clusterName}.yaml
provider: providers/my-custom-provider
```

Or, use a repo:

```yaml
# cluster/{clusterName}.yaml
provider: github.com/mycompany/my-custom-provider
```

Or, if using a repo that contains multiple providers:

```yaml
# cluster/{clusterName}.yaml
provider: custom-provider-b
provider-source: github.com/githubuser/providers
```
