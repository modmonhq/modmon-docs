---
sidebar_position: 5
sidebar_label: Custom Pages
---

# Custom pages

You can define custom error and maintenance pages for your projects. These should be static, standalone HTML files.

During any sort of downtime on the stack, all traffic will be routed to the custom maintenance page.

In your project's `.modmon/project.yaml` file, you can define the following:

With this project file structure:

```filetree
project-root/
├── .modmon/
│   └── project.yaml
└── static/
    └── html/
        ├── error.html
        └── maintenance.html
        └── 500.html
        └── 503.html
```

You can define the following in your `project.yaml` file:

```yaml
custom_pages:
    error_page: static/html/error.html
    maintenance_page: static/html/maintenance.html
    code_pages: static/html/*.html
```

These should be relative to the project root, not the `.modmon` root.

The `code_pages` will match any specific error code to an html file (ex. 404 will match 404.html). If they do not match, the default error page will be used.
