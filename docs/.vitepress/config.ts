import { defineConfig, DefaultTheme } from 'vitepress'

export default defineConfig({
  title: `Tik 英雄联盟对局助手`,
  description: '这可能是你用过最体验最好的英雄联盟游戏工具',

  head: [

  ],

  vue: {
    reactivityTransform: true
  },

  themeConfig: {
    logo: '/logo.png',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaowuyaya' }
    ],

    footer: {
      message: `闽ICP备2022001163号`,
      copyright: 'Copyright © 2022-present XiaoWuYaYa & liaolingwei605@163.com Contributors'
    },

    nav: [
      { text: '使用教程', link: '/guide/', activeMatch: '/guide/' },
      { text: '常见问题', link: '/question/', activeMatch: '/question/' },
      { text: '历史版本', link: '/release/', activeMatch: '/release/' },
      { text: '捐助项目', link: '/donate/', activeMatch: '/donate/' },

    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'Why Vite',
              link: '/guide/why'
            },
            {
              text: 'Getting Started',
              link: '/guide/'
            },
            {
              text: 'Features',
              link: '/guide/features'
            },
            {
              text: 'Using Plugins',
              link: '/guide/using-plugins'
            },
            {
              text: 'Dependency Pre-Bundling',
              link: '/guide/dep-pre-bundling'
            },
            {
              text: 'Static Asset Handling',
              link: '/guide/assets'
            },
            {
              text: 'Building for Production',
              link: '/guide/build'
            },
            {
              text: 'Deploying a Static Site',
              link: '/guide/static-deploy'
            },
            {
              text: 'Env Variables and Modes',
              link: '/guide/env-and-mode'
            },
            {
              text: 'Server-Side Rendering (SSR)',
              link: '/guide/ssr'
            },
            {
              text: 'Backend Integration',
              link: '/guide/backend-integration'
            },
            {
              text: 'Comparisons',
              link: '/guide/comparisons'
            },
            {
              text: 'Troubleshooting',
              link: '/guide/troubleshooting'
            },
            {
              text: 'Migration from v2',
              link: '/guide/migration'
            }
          ]
        },
        {
          text: 'APIs',
          items: [
            {
              text: 'Plugin API',
              link: '/guide/api-plugin'
            },
            {
              text: 'HMR API',
              link: '/guide/api-hmr'
            },
            {
              text: 'JavaScript API',
              link: '/guide/api-javascript'
            },
            {
              text: 'Config Reference',
              link: '/config/'
            }
          ]
        }
      ],
      '/question/': [
        {
          text: '常见问题',
          items: [
            {
              text: '启动应用弹窗报错',
              link: '/question/launch-error'
            },
            {
              text: '选人界面时，对局面板信息显示不全',
              link: '/question/panel-error'
            },
            {
              text: '5V5训练模式无法启动',
              link: '/question/5v5-error'
            },
            {
              text: '发送内容存在缺失',
              link: '/question/send-error'
            },
            {
              text: '快捷键发送无反应',
              link: '/question/hotkey-error'
            },
            {
              text: '未检测到游戏进程',
              link: '/question/credentials-error'
            }
          ]
        }
      ]
    }
  }
})
