<template>
  <CustomNavbar></CustomNavbar>
  <!-- 
    滚动容器 将主页面添加到scroll中，
    可以不让自定义头部跟着页面滚动 
    注意这里我们要对容器开启下拉刷新
   -->
  <scroll-view
    @refresherrefresh="onRefresh"
    refresher-enabled
    :refresher-triggered="isTrigger"
    @scrolltolower="onScrollToLower"
    scroll-y
    class="scroll-view"
  >
    <!-- 导入骨架屏 isLoading用来判断是否显示骨架屏 -->
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <XtxSwiper :bannerList="bannerList" />
      <CategoryPanel :categoryList="categoryList"></CategoryPanel>
      <HotPanel :hotList="hotList"></HotPanel>
      <!-- 导入公共组件 猜你喜欢 -->
      <XtxGuess ref="guessRef"></XtxGuess>
    </template>
  </scroll-view>
  <view></view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 引入自定义导航条组件
import { onLoad } from '@dcloudio/uni-app'
import CategoryPanel from './components/CategoryPanel.vue'
import CustomNavbar from './components/CustomNavbar.vue'
//导入首页骨架屏组件
import PageSkeleton from './components/PageSkeleton.vue'
import HotPanel from './components/HotPanel.vue'
import { getHomeBannerAPI, getCategoryAPI, getHotItemAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import type { XtxGuessInstance } from '@/types/component'

//骨架屏是否显示
const isLoading = ref(false)

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

//4. ============ start 滚动容器scroll添加 滚动触底事件  =============
//获取猜你喜欢组件的实例对象
const guessRef = ref<XtxGuessInstance>()
const onScrollToLower = () => {
  // console.log('滚动触底了')
  guessRef.value?.getMore()
}

//------------------end 滚动容器scroll添加 滚动触底事件  =============

//5. ===============start 滚动容器scroll开启下拉刷新 ==========
const isTrigger = ref(false)
const onRefresh = async () => {
  //页面刷新之前开启下拉刷新
  isTrigger.value = true
  console.log('页面刷新了')
  //1. 获取子组件中重置数据函数 直接执行 执行完毕在获取数据
  guessRef.value?.resetData()

  //2. 页面刷新 获取轮播图数据，分类数据，热门推荐数据
  //注意这里必须异步执行，不然刷新这两个直接就执行了
  //这里还有一个bug 函数必须一个一个执行，很浪费资源
  // await getHomeBanner()
  // await getCategory()
  // await getHotItem()
  //升级 这里使用Promise.all 来并发执行这三个函数
  await Promise.all([getHomeBanner(), getCategory(), getHotItem(), guessRef.value?.getMore()])

  //页面加载完毕后关闭下拉刷新
  isTrigger.value = false
}
//--------------------end 滚动容器关闭下拉刷新---------------
onLoad(async () => {
  //页面加载时开启骨架屏
  isLoading.value = true
  await Promise.all([getHomeBanner(), getCategory(), getHotItem()])
  //页面加载结束时关闭骨架屏
  isLoading.value = false
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
