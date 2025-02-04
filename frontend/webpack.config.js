const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import the plugin

module.exports = {
    entry: './src/index.js', // Entry point for the app
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output filename
        clean: true, // Clean the dist folder before each build
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Process JavaScript files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets for React
                    },
                },
            },
            {
                test: /\.css$/i, // Process CSS files
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Use the index.html in the public directory
            filename: 'index.html', // Name of the output HTML file
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Serve content from the dist directory
        },
        compress: true, // Enable gzip compression
        port: 3000, // Port for the dev server
        open: true, // Automatically open the app in the browser
    },
};
