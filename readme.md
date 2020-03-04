### Typescript学习日记（一）

#### TypeScript开发环境搭建

##### 1、使用npm初始化项目
交互式自定义配置：
```
npm init
```
根据需要自定义配置如下：
```
{
  "name": "learn-ts",
  "version": "1.0.0",
  "description": "source code of learn-ts",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "typeScript"
  ],
  "author": "yingliyu",
  "license": "MIT"
}

```
或者使用默认配置：
```
npm init -y
```
然后创建目录：
![4ca36a1a064e604f5dfd5aa303a80417.png](en-resource://database/1126:1)

##### 2、全局安装部分依赖
tslint： 专注于ts对代码格式检测，用于统一代码规范
```
npm install typescript tslint -g
```

##### 3、使用tsc初始化配置
安装完成之后可以使用typescript的tsc命令初始化ts的配置：
```
tsc --init
```
配置成功会在项目中生成一个tsconfig.json文件，修改tsconfig.json文件之后要重新启动项目。

##### 4、配置webpack
添加webpack使用webpack4(亮点：尽可能少的配置)：
安装以下开发依赖：
```
npm install webpack webpack-cli webpack-dev-serve -D
```
新建配置文件：build/webpack.config.js
添加配置并安装相关依赖：
```
npm install ts-loader -D
```
```
npm install cross-env -D
```

```
npm install clean-webpack-plugin html-webpack-plugin -D
```
项目中再安装typescript
```
npm install typescript
```

##### 5、添加开发和打包命令
package.json
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "cross-env NODE_ENV=development webpack-dev-server --config ./build/webpack.config.js",
    "build": "cross-env NODE_ENV=production webpack --config ./build/webpack.config.js"
  }
```
>启动：npm start

>打包：npm run build