<template>
  <CustomNavbar></CustomNavbar>
  <!-- 将主页面添加到scroll中，可以不让自定义头部跟着页面滚动 -->
  <scroll-view scroll-y class="scroll-view">
    <XtxSwiper :bannerList="bannerList" />
    <CategoryPanel :categoryList="categoryList"></CategoryPanel>
    <HotPanel :hotList="hotList"></HotPanel>
    <!-- 导入公共组件 猜你喜欢 -->
    <XtxGuess></XtxGuess>
  </scroll-view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 引入自定义导航条组件
import { onLoad } from '@dcloudio/uni-app'
import CategoryPanel from './components/CategoryPanel.vue'
import CustomNavbar from './components/CustomNavbar.vue'
import HotPanel from './components/HotPanel.vue'
import { getHomeBannerAPI, getCategoryAPI, getHotItemAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'

//1. ============ start 首页广告区域的轮播图 =============
//存放首页广告数据的数组
const bannerList = ref<BannerItem[]>([])
//页面加载时 获取首页广告
const getHomeBanner = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
// ----------------- end 首页广告区域的轮播图 -----------------

//2. ============ start 首页前台分类 =============
//存放首页分类数据的数组
const categoryList = ref<CategoryItem[]>([])
//页面加载时 获取首页分类
const getCategory = async () => {
  const res = await getCategoryAPI()
  categoryList.value = res.result
}
// ----------------- end 首页前台分类 -----------------

//3. ============ start 首页热门推荐 =============
//存放首页热门推荐数据的数组
const hotList = ref<HotItem[]>([])
//页面加载时 获取首页热门推荐
const getHotItem = async () => {
  const res = await getHotItemAPI()
  hotList.value = res.result
}
// ----------------- end 首页热门推荐 -----------------

onLoad(() => {
  getHomeBanner()
  getCategory()
  getHotItem()
})
</script>

<style lang="scss">
//页面样式 纵向排列 然后导航栏固定
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  // 内容区域 占满剩余空间
  flex: 1;
}
</style>
