改进建议：
    关于请求：
        我们使用了 jquery 来做 ajax 请求，
        建议使用更轻量的库来做请求：比如 axios
    关于 semantic-ui
        建议大家使用 semantic-ui 和 react 的集成 UI 库以便更好的使用, 它不依赖 jquery
        https://react.semantic-ui.com/introduction

    打包大小的改进：
        大家不必引入整个 semantic.js ,只需引入用到的 js 即可, 它在：semantic/dist/component
        大家不一引入整个 semantic.css, 只需引入用到的 css 即可，它在： semantic/dist/component


项目使用：
    npm start : 在测试服务器启动项目
    npm run dev : 开发打包
    npm run dist: 生产打包
    npm run serve : 当生产打包之后，你可以用此预览你的项目
    npm run build:semantic: 用于构建 semantic 包的文件
