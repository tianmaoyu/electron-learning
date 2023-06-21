
# Electron


### 安装 node &  npm 


```sh
mkdir my-electron-app && cd my-electron-app
npm init
```

### 使用cnpm 解决npm 安装失败问题


```sh
npm install -g cnpm --registry=https://registry.npmmirror.com
cnpm install --save-dev electron
```


## package.json

```json
{
  "name": "electron-demo",
  "version": "1.0.0",
  "description": "Hello World!",
  "main": "main.js",
  "author": "",
  "license": "ISC",
  "scripts": {
    "start": "electron ."
  }
}
```



###  main.js

```js
// main.js

// electron 模块可以用来控制应用的生命周期和创建原生浏览窗口
const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  // 创建浏览窗口
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // 加载 index.html
  mainWindow.loadFile('index.html')

  // 打开开发工具
  // mainWindow.webContents.openDevTools()
}

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // 在 macOS 系统内, 如果没有已开启的应用窗口
    // 点击托盘图标时通常会重新创建一个新窗口
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此, 通常
// 对应用程序和它们的菜单栏来说应该时刻保持激活状态, 
// 直到用户使用 Cmd + Q 明确退出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// 在当前文件中你可以引入所有的主进程代码
// 也可以拆分成几个文件，然后用 require 导入。
```



### index.html

```html
<!--index.html-->

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
    <title>你好!</title>
  </head>
  <body>
    <h1>你好!</h1>
    我们正在使用 Node.js <span id="node-version"></span>,
    Chromium <span id="chrome-version"></span>,
    和 Electron <span id="electron-version"></span>.

    <！-- 您也可以此进程中运行其他文件 -->
    <script src="./renderer.js"></script>
  </body>
</html>
```

### preload.js

```js
// preload.js

// 所有的 Node.js API接口 都可以在 preload 进程中被调用.
// 它拥有与Chrome扩展一样的沙盒。
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })
```


### 打包发布

-----


将 Electron Forge 添加到您应用的开发依赖中，并使用其"import"命令设置 Forge 的脚手架：

```sh
cnpm install --save-dev @electron-forge/cli
npx electron-forge import #有点慢要配置一个进行
```

使用 Forge 的 `make` 命令来创建可分发的应用程序：

```
npm run make
```



####  npx electron-forge import 配置

[Electron](https://so.csdn.net/so/search?q=Electron&spm=1001.2101.3001.7020)的依赖包下载失败，其下载地址在国外，所以依赖没有下载成功。（**仅仅配置 阿里云的registry是没有用的**）

解决办法：
配置ELECTRON_MIRROR

#### 解决的方法就是在~/.npmrc里做如下设置，

> ```
> npm config list #可以查看.npmrc 位置
> ```
>
> electron_mirror="https://npm.taobao.org/mirrors/electron/"

#### 如果您使用的是yarn，请将 ~/.npmrc里添加以下配置

ELECTRON_MIRROR "https://npm.taobao.org/mirrors/electron/"