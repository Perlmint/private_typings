declare module "webpack-isomorphic-tools/plugin" {
	class WebpackIsomorphicToolsPlugin {
		constructor(config: any);
		development(): WebpackIsomorphicToolsPlugin;
	}

	export = WebpackIsomorphicToolsPlugin;
}

declare module "webpack-isomorphic-tools" {
	interface Assets {
		styles?: {[key:string]: string};
		javascript?: {[key:string]: string};
	}

	class WebpackIsomorphicTools {
		constructor(config: any);
		development(enable: boolean): WebpackIsomorphicTools;
		server(projectBasePath: string, func: () => void): WebpackIsomorphicTools;
		refresh();
		assets(): Assets;
	}

	export = WebpackIsomorphicTools;
}
