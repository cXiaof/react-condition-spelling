import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import cssnano from 'cssnano'

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs'
    },
    plugins: [
        babel({ exclude: 'node_modules/**' }),
        postcss({
            plugins: [cssnano()],
            extensions: ['.css']
        })
    ]
}
