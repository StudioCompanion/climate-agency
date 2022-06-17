import type { StorybookConfig } from '@storybook/core-common'
import { resolve } from 'path'
import config from '../tsconfig.json'

const createAliasesFromPaths = () => {
  const prefixRegExp = new RegExp('.*')
  const aliases: Record<string, string> = {}
  Object.entries(config.compilerOptions.paths).forEach(([key, entry]) => {
    const [value] = entry
    const [newKey] = key.split('/')
    const pathMatches = value.match(prefixRegExp)

    /**
     * Check if TS Config is looking for src
     */
    if (pathMatches && pathMatches.length > 0) {
      const [localPath] = pathMatches
      const aliasPath = localPath
        .split('/')
        .filter((x) => x !== '*')
        .join('/')

      aliases[newKey] = resolve(__dirname, `../src/${aliasPath}`)
    }
  })

  return aliases
}

const sbConfig: StorybookConfig = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        actions: false,
        controls: false,
        docs: false,
      },
    },
    'storybook-addon-next-router',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    if (config?.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        ...createAliasesFromPaths(),
      }
    }

    if (config.module) {
      // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
      const fileLoaderRule = config.module.rules.find(
        // @ts-expect-error
        (rule) => rule.test && rule.test.test('.svg')
      )

      if (fileLoaderRule) {
        fileLoaderRule.exclude = /\.svg$/
      }

      config.module.rules.push({
        test: /\.svg$/,
        enforce: 'pre',
        loader: require.resolve('@svgr/webpack'),
      })
    }

    // Return the altered config
    return config
  },
}

export default sbConfig
