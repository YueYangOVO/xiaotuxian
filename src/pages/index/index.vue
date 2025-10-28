<template>
  <CustomNavbar></CustomNavbar>
  <XtxSwiper :bannerList="bannerList" />
  <view class="index"> </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 引入自定义导航条组件
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI } from '@/services/home'
import type { BannerItem } from '@/types/home'

//1. ============ start 首页广告区域的轮播图 =============
//存放首页广告数据的数组
const bannerList = ref<BannerItem[]>([])
//页面加载时 获取首页广告
const getHomeBanner = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
// ----------------- end 首页广告区域的轮播图 -----------------

onLoad(() => {
  getHomeBanner()
})
</script>

<style lang="scss">
//
</style>
