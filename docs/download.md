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
import Download from './download.vue'
</script>

<VPTeamPage>
  <client-only>
    <Download/>
  </client-only>
</VPTeamPage>
