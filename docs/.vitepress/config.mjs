import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'SPlayer',
  description: 'A lovely HTML5 square music player',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/getting-started' }
    ],
    sidebar: [
      {
        text: '指南',
        items: [{ text: '快速开始', link: '/guide/getting-started' }]
      },
      {
        text: '其他',
        items: [
          { text: '参数', link: '/other/options' },
          { text: 'API', link: '/other/api' },
          { text: '事件绑定', link: '/other/event' },
          { text: '常见问题', link: '/other/faq' }
        ]
      },
      { text: '拓展', items: [{ text: 'CDN', link: '/extra/cdn' }] }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/CatSouta/splayer-js' }]
  }
});
