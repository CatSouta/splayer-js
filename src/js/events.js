import Icons from './icons';

export default (options) => {
  const { container, volume } = options;

  const audio = container.querySelector('.splayer-audio');
  const mask = container.querySelector('.splayer-mask');
  const controller = container.querySelector('.splayer-controller');
  const progress = container.querySelector('.splayer-progress');

  audio.volume = volume;

  const togglePlayPause = () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  const updateProgress = () => {
    progress.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
  };

  const updateController = (isPlaying) => {
    controller.innerHTML = isPlaying ? Icons.pause : Icons.play;
    controller.classList.add('splayer-animate-pulse');
    setTimeout(() => controller.classList.remove('splayer-animate-pulse'), 300);
  };

  controller.onclick = togglePlayPause;

  audio.ontimeupdate = updateProgress;

  audio.onplay = () => {
    mask.removeAttribute('style');
    progress.classList.remove('splayer-progress-paused');
    updateController(true);
  };

  audio.onpause = () => {
    mask.style.opacity = 1;
    progress.classList.add('splayer-progress-paused');
    updateController(false);
  };

  audio.onended = () => {
    progress.style.width = '0';
  };
};
