import CracoAlias from "craco-alias";

export const plugins = [
    {
        plugin: CracoAlias,
        options: {
            source: "options",
            baseUrl: "./src",
            tsConfigPath: "./tsconfig.json",
            aliases: {
                '@api/*': ["./src/api/*"],
            }
        }
    }
];
