const { resolve } = require(`path`);

const path = require(`path`);
const glob = require(`glob`);

const { dump } = require(`dumper.js`);

const getTemplates = () => {
	const sitePath = path.resolve(`./`);
	return glob.sync(`./src/templates/**/*.js`, { cwd: sitePath });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
	const templates = getTemplates();

	// dump(templates);

	const {
		data: {
			allWpContentNode: { nodes: contentNodes },
			allWpProjectCategory: { nodes: projectCategory },
		},
	} = await graphql(/* GraphQL */ `
		query ALL_CONTENT_NODES {
			allWpProjectCategory {
				nodes {
					nodeType
					uri
					id
				}
			}
			allWpContentNode(
				sort: { fields: modifiedGmt, order: DESC }
				filter: { nodeType: { ne: "MediaItem" } }
			) {
				nodes {
					nodeType
					uri
					id
					... on WpPage {
						id
						template {
							... on WpDefaultTemplate {
								templateName
							}
							... on WpFrontPageTemplate {
								templateName
							}
							... on WpWorkPageTemplate {
								templateName
							}
							... on WpAboutPageTemplate {
								templateName
							}
						}
					}
				}
			}
		}
	`);

	// dump(contentNodes);
	// dump(projectCategory);

	const contentTypeTemplateDirectory = `./src/templates/`;
	const contentTypeTemplates = templates.filter(path =>
		path.includes(contentTypeTemplateDirectory),
	);

	await Promise.all(
		projectCategory.map(async node => {
			const { nodeType, uri, id } = node;
			const templatePath = `${contentTypeTemplateDirectory}ProjectCategory.js`;
			const contentTypeTemplate = contentTypeTemplates.find(path => path === templatePath);

			let component = resolve(contentTypeTemplate);

			await actions.createPage({
				component,
				path: uri,
				context: {
					id,
				},
			});
		}),
		contentNodes.map(async node => {
			const { nodeType, uri, id } = node;

			if (['Client', 'Service'].includes(nodeType)) {
				reporter.log(`${nodeType} doesn't need page`);
				return;
			}

			const templatePath = `${contentTypeTemplateDirectory}${nodeType}.js`;

			const contentTypeTemplate = contentTypeTemplates.find(path => path === templatePath);

			if (!contentTypeTemplate) {
				dump(node);
				reporter.log(``);
				reporter.log(``);
				reporter.panic(
					`[using-gatsby-source-wordpress] No template found at ${templatePath}\nfor single ${nodeType} ${
						node.id
					} with path ${node.uri}\n\nAvailable templates:\n${contentTypeTemplates.join(
						`\n`,
					)}`,
				);
			}

			let component = resolve(contentTypeTemplate);

			if (node.template && node.template.templateName !== 'Default') {
				component = resolve(
					`${contentTypeTemplateDirectory}${node.template.templateName}.js`,
				);
			}

			await actions.createPage({
				component,
				path: uri,
				context: {
					id,
				},
			});
		}),
	);
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	if (stage === 'build-html' || stage === 'develop-html') {
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /locomotive-scroll/,
						use: loaders.null(),
					},
				],
			},
		});
	}
};
