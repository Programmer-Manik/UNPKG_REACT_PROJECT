import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
// rollup.config.mjs
export default {
	input: 'src/main.js',
	output: {
		file: 'public/bundles.js',
		format: 'esm'
	},
    plugins:[nodeResolve({extensions:['.js','.jsx']}),
    commonjs(),
    replace({
        'process.env.NODE_ENV':JSON.stringify('development')
    }),
]
};