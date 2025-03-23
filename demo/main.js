const sp1 = new SPlayer({
  container: document.getElementById('splayer-1'),
  options: {
    volume: 0.2
  },
  audio: {
    title: '屑屑',
    artist: 'ChiliChill',
    cover: 'https://p2.music.126.net/UGl8LDXnxRn6OidaM6Tzlw==/109951169854682128.jpg',
    url: 'https://api.bakaomg.cn/v1/music/netease/url?id=2615403834'
  }
});

const sp2 = new SPlayer({
  container: document.getElementById('splayer-2'),
  options: {
    volume: 0.2
  },
  audio: {
    title: 'Insane',
    artist: 'Black Gryph0n',
    cover: 'https://p1.music.126.net/b6bt1NNzCDkK9LK0EUEnEw==/109951166060842995.jpg',
    url: 'https://api.bakaomg.cn/v1/music/netease/url?id=1850706877'
  }
});
