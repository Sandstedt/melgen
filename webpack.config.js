var path = require("path");
module.exports = {
    entry: {
        app: ["./app/main.js"]
    },
    output: {
        path: path.resolve(__dirname, ""),
        publicPath: "/",
        filename: "bundle.js"
    },

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};