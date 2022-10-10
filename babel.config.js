module.exports = {
  plugins: [
    //"@babel/plugin-proposal-export-namespace-from",
    [
      "module-resolver",
      {
        root: ["."],
        extensions: [".jsx",'.tsx', ".js", ".json"],
        alias: {
          "@": "./src"
        },
      },
    ],
  ],
};
