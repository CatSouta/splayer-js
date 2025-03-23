# API

- `sp.play()`: 播放音频
- `sp.pause()`: 暂停音频
- `ap.volume(percentage: number)`: 设置音频音量
  ```js
  sp.volume(0.7);
  ```
- `sp.seek(time: number)`: 跳转到特定时间，时间的单位为秒
  ```js
  sp.seek(60);
  ```
- `sp.on(event: string, handler: function)`: 绑定音频和播放器事件，[点击查看](/other/event)
