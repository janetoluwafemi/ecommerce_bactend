module.exports = {
    transform: {
        "^.+\\.jsx?$": "babel-jest",  // Transform JavaScript/JSX files with Babel
    },
    transformIgnorePatterns: [
        "/node_modules/(?!your-es-module-package-name).*/"  // Optional if you have specific packages to transpile
    ]
};
