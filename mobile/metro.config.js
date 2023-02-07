/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const { getDefaultConfig } = require('metro-config');
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();

module.exports = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true,
                babelTransformerPath: require.resolve('react-native-typescript-transformer'),
            },
        }),
    },
    resolver: {
        ...defaultResolver,
        sourceExts: [...defaultResolver.sourceExts, 'cjs'],
    },
};
