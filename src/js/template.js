import Template from '../template/player.ejs';
import Icons from './icons';

export default (options) => {
  options.container.innerHTML = Template({
    options: options.options,
    audio: options.audio,
    icons: Icons
  });
};
