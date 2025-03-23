# 快速开始

## 安装

使用 npm：

```
npm install splayer-js
```

使用 yarn：

```
yarn add splayer-js
```

## 入门

```html
<link rel="stylesheet" href="SPlayer.min.css" />
<div id="splayer"></div>
<script src="SPlayer.min.js"></script>
```

```js
const sp = new SPlayer({
  container: document.getElementById('splayer'),
  audio: {
    name: 'name',
    artist: 'artist',
    url: 'url.mp3',
    cover: 'cover.jpg'
  }
});
```
