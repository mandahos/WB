const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new BundleAnalyzerPlugin(),
    ],
    module: {
        rules: [
            {
             test: /\.css$/i,
             use: [ 'style-loader', 'css-loader']   
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ]
    }
};