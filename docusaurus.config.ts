import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: 'Modmon Developer Site',
	tagline: 'Simplifying deployment of modular monolith applications',
	favicon: 'img/favicon.ico',

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
	},

	// Set the production url of your site here
	url: 'https://modmon.dev',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'modmonhq', // Usually your GitHub org/user name.
	projectName: 'modmon', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/modmonhq/modmon-docs/tree/master/',
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ['rss', 'atom'],
						xslt: true,
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/modmonhq/modmon-docs/tree/master/',
					// Useful options to enforce blogging best practices
					onInlineTags: 'warn',
					onInlineAuthors: 'warn',
					onUntruncatedBlogPosts: 'warn',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: 'img/docusaurus-social-card.jpg',
		navbar: {
			title: 'Modmon for Developers',
			logo: {
				alt: 'Modmon Logo',
				src: 'img/logo.svg',
			},
			items: [
				{
					type: 'docSidebar',
					sidebarId: 'tutorialSidebar',
					position: 'left',
					label: 'Docs',
				},
				{
          label: 'API Docs',
					position: 'left',
					to: "/docs/api/petstore-api",
				},
				{ to: '#', label: 'Changelog', position: 'left' },
				{
					href: 'https://github.com/modmonhq/modmon',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Documentation',
					items: [
						{
							label: 'Docs',
							to: '/docs/tutorial/intro',
						},
						{
							label: 'API Docs',
							to: '#',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'GitHub Discussions',
							href: 'https://github.com/modmonhq/modmon/discussions',
						},
						{
							label: 'Discord',
							href: 'https://discord.gg/YVsfzBf4Jt',
						},
						{
							label: 'X',
							href: '#',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'Website',
							to: 'https://modmon.org',
						},
						{
							label: 'Blog',
							to: 'https://blog.modmon.org',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/modmonhq',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Modmon Foundation. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
			additionalLanguages: [
				'ruby',
				'csharp',
				'php',
				'java',
				'powershell',
				'json',
				'bash',
				'dart',
				'objectivec',
				'r',
			],
		},
		languageTabs: [
			{
				highlight: 'python',
				language: 'python',
				logoClass: 'python',
			},
			{
				highlight: 'bash',
				language: 'curl',
				logoClass: 'curl',
			},
			{
				highlight: 'csharp',
				language: 'csharp',
				logoClass: 'csharp',
			},
			{
				highlight: 'go',
				language: 'go',
				logoClass: 'go',
			},
			{
				highlight: 'javascript',
				language: 'nodejs',
				logoClass: 'nodejs',
			},
			{
				highlight: 'ruby',
				language: 'ruby',
				logoClass: 'ruby',
			},
			{
				highlight: 'php',
				language: 'php',
				logoClass: 'php',
			},
			{
				highlight: 'java',
				language: 'java',
				logoClass: 'java',
				variant: 'unirest',
			},
			{
				highlight: 'powershell',
				language: 'powershell',
				logoClass: 'powershell',
			},
			{
				highlight: 'dart',
				language: 'dart',
				logoClass: 'dart',
			},
			{
				highlight: 'javascript',
				language: 'javascript',
				logoClass: 'javascript',
			},
			{
				highlight: 'c',
				language: 'c',
				logoClass: 'c',
			},
			{
				highlight: 'objective-c',
				language: 'objective-c',
				logoClass: 'objective-c',
			},
			{
				highlight: 'ocaml',
				language: 'ocaml',
				logoClass: 'ocaml',
			},
			{
				highlight: 'r',
				language: 'r',
				logoClass: 'r',
			},
			{
				highlight: 'swift',
				language: 'swift',
				logoClass: 'swift',
			},
			{
				highlight: 'kotlin',
				language: 'kotlin',
				logoClass: 'kotlin',
			},
			{
				highlight: 'rust',
				language: 'rust',
				logoClass: 'rust',
			},
		],
	} satisfies Preset.ThemeConfig,
  
  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          petstore: {
            specPath: "examples/petstore.yaml",
            outputDir: "docs/api/petstore",
            downloadUrl:
              "https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-template-openapi-docs/main/examples/petstore.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

export default config;
