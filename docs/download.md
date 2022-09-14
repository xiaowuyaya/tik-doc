---
layout: page
title: 下载页
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme'
import { core } from './_data/core.js'

setTimeout(() => {
  window.open(core.release.url, "_blank");
}, 1500);
</script>

<VPTeamPage>
  <div class="download-container">
    <img src="/loading.gif" />
    <p class="download-desc">获取下载地址中，即将开始下载应用程序安装包... 如果一直无反应，请<a :href="core.release.url" target="_blank">点击此处</a>进行下载。</p>
    <p class="download-desc">或加Q群：914241626 在群文件中获取最新安装包，以及体验测试版应用程序，欢迎交流反馈。</p>
  </div>
</VPTeamPage>

<style lang="sass">
.download-container
  display: flex
  flex-direction: column
  align-items: center
  padding-top: 28px
  img
    width: 100px
    padding: 20px 0
  .download-desc
    margin: 10px 0 0 0
    a
      color: #EF4444
</style>
