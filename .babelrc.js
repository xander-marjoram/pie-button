const sharedPresets = ['@babel/preset-typescript'];
const sharedIgnoredFiles = ['src/**/*.test.ts'];
const sharedConfig = {
    ignore: sharedIgnoredFiles,
    presets: sharedPresets,
};

const bundlePresets = [
    [
        '@babel/preset-env',
        {
            targets: '> 0.25%, not dead',
        },
    ],
    ...sharedPresets,
];

const bundleConfig = {
    ...sharedConfig,
    presets: bundlePresets,
};

module.exports = {
    env: {
        esmUnbundled: sharedConfig,
        esmBundled: bundleConfig,
        test: {
            presets: ['@babel/preset-env', ...sharedPresets],
        },
    },
    plugins: [
        ["@babel/plugin-proposal-decorators", { "version": "2023-05" }]
    ],
};
