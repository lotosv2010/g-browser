# g-browser

模拟实现浏览器渲染的整个流程

## canvas 插件使用

```shell
npm install canvas

# macOS
brew install pkg-config cairo pango libpng jpeg giflib librsvg pixman python-setuptools

npm rebuild canvas
```

## 运行

```shell
# 启动服务端
cd ./server
nodemon index.js

#启动客户端
cd ./client
nodemon request.js
```
