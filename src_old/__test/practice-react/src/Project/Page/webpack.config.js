module.exports = {
    module: {
        rules: [
            {
                test: /\.js.*/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'stage-2', 'react']
                        }
                    }
                ]
            }, {
                test: /\.css?/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }, {
                test: /\.scss?/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
}