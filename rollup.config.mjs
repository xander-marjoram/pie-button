import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const extensions = ['.js', '.ts'];

export default {
    input: 'src/index.ts',
    output: {
        file: 'lib/bundles/bundle.esm.min.js',
        format: 'esm',
        sourcemap: true,
    },
    plugins: [
        nodeResolve({ extensions }),
        babel({
            babelHelpers: 'bundled',
            include: ['src/**/*.ts'],
            extensions,
            exclude: './node_modules/**',
        }),
        terser(),
    ],
}
