export default (options) => {
  const { container, audio = {}, options: { autoplay = false, loop = false, volume = 0.7 } = {} } = options;

  if (!container) {
    throw new Error('SPlayer.js: Missing container parameter.');
  }

  const { title = 'Unknown', artist = 'Unknown', url, cover = '' } = audio;

  if (!url || typeof url !== 'string' || url === '') {
    throw new Error('SPlayer.js: Missing audio url.');
  }

  return {
    container,
    options: { autoplay, loop, volume },
    audio: { title, artist, url, cover }
  };
};
