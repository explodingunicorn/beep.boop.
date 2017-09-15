const APP_PATH = __dirname + '/app';
const DIST_PATH = __dirname + '/dist';

module.exports = {

    entry: {
        javascript: APP_PATH + "/index.js"
    },

    output: {
        filename: "app.js",
        path: DIST_PATH,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.less?$/,
                exclude: /node_modules/,
                loaders: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    }
};