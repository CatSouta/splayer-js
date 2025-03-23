import handleOption from './options';
import createPlayer from './template';
import bindEvents from './events';
import utils from './utils';

class SPlayer {
  constructor(options) {
    this.options = handleOption(options);
    this.container = this.options.container;
    this.original = this.options.options;
    this.info = this.options.audio;

    createPlayer({
      container: this.container,
      options: this.original,
      audio: this.info
    });

    bindEvents({
      container: this.container,
      volume: this.original.volume
    });
  }

  get audio() {
    return this.container.querySelector('.splayer-audio');
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  seek(time) {
    this.audio.currentTime = time;
  }

  volume(percentage) {
    this.audio.volume = percentage;
  }

  on(event, handler) {
    this.audio.addEventListener(event, handler);
  }
}

export default SPlayer;

utils.setupAudioMutex();
