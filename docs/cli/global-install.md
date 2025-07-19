---
sidebar_position: 2
sidebar_label: Installing Globally
---

# Installing the CLI globally

The CLI can be installed globally using the following command:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="npm" label="npm">
```shell
npm install -g @modmon/cli
```

</TabItem>
<TabItem value="yarn" label="yarn">

```shell
yarn global add @modmon/cli
```

</TabItem>
<TabItem value="pnpm" label="pnpm">

```shell
pnpm install -g @modmon/cli
```

</TabItem>
</Tabs>

This will install the CLI to your system's global node_modules directory, allowing you to run it from anywhere. This is useful for creating new projects and working outside of a project directory.
