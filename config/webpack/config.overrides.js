module.exports = function override(config, env) {
  config.module.rules[1].oneOf.splice(2, 0, {
    test: /\.less$/i,
    use: [{
        loader: "style-loader"
      },
      {
        loader: "css-loader"
      },
      {
        loader: "less-loader",
        options: {
          lessOptions: {
            javascriptEnabled: true,
            sourceMap: true,
          },
        },
      },
    ],
  })

  return config
}