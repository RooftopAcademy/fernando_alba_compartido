const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { Template } = require('webpack')

module.exports = {
    mode: 'development',
    entry : './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')] 
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[hash:6][ext]",
                    outputPath: "images",
                    publicPath: "images",
                    emitFile: true,
                    esModule: false
                }
            }
        ]
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]
}