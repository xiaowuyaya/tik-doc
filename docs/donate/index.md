---
layout: page
title: 捐助项目
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme'
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>个人项目，用爱发电不易</template>
    <template #lead>
      如果你喜欢这个项目，不妨赞助一下开发者喝杯咖啡 ❤️
    </template>
  </VPTeamPageTitle>
  <div class="qrcode" >
    <div class="qrcode-box">
      <img class="qrcode-img" src="https://qiniu.eiko.ren/serendipity/web/wechat-qrcode.png" alt="wxPay"/>
      <div>微信</div>
    </div>
    <div class="qrcode-box">
      <img class="qrcode-img" src="https://qiniu.eiko.ren/serendipity/web/ali-qrcode.png" alt="aliPay"/>
      <div>支付宝</div>
    </div>
    
  </div>
</VPTeamPage>

<style lang="sass">
.qrcode
  margin-top: 20px
  display: flex
  align-items: center
  justify-content: center

  .qrcode-box
    display: flex
    flex-direction: column
    align-items: center
    font-size: 23px
    padding: 0 20px

    .qrcode-img
      width: 240px
      margin: 10px 0
</style>