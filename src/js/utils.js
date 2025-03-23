const utils = {
  /**
   * Setup Audio Mutex
   */
  setupAudioMutex: () => {
    let currentPlayingAudio = null;

    document.addEventListener(
      'play',
      (event) => {
        const targetAudio = event.target;

        if (targetAudio.tagName === 'AUDIO' && targetAudio.classList.contains('splayer-audio')) {
          if (targetAudio !== currentPlayingAudio) {
            if (currentPlayingAudio && !currentPlayingAudio.paused) {
              currentPlayingAudio.pause();
            }
            currentPlayingAudio = targetAudio;
          }
        }
      },
      true
    );
  }
};

export default utils;
