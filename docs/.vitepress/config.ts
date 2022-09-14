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
      { text: '常见问题', link: '/question/', activeMatch: '/question/' },
      { text: '历史版本', link: '/release/', activeMatch: '/release/' },
      { text: '捐助项目', link: '/donate/', activeMatch: '/donate/' },
    ],

    sidebar: {
      '/release/': [
        {
          text: '版本相关',
          items: [
            {
              text: '更新日志',
              link: '/release/'
            },
            {
              text: '历史版本',
              link: '/release/history-version'
            },
          ]
        },
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
