<template>
  <view class="carousel">
    <swiper :circular="true" :autoplay="true" :interval="3000" @change="handleChange">
      <swiper-item v-for="item in bannerList" :key="item.id">
        <navigator :url="item.hrefUrl" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in bannerList"
        :key="item.id"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'
//从父组件中接收数据
const props = defineProps<{
  /** 轮播图数据 */
  bannerList: BannerItem[]
}>()

//轮播图选中下标
const activeIndex = ref(0)
//当swiper中当前项改变时会触发这个change事件 通过e获取当前索引项
const handleChange: UniHelper.SwiperOnChange = (e) => {
  console.log('轮播图当前下标: ' + e.detail.current)
  //这里 ！感叹号 非空断言 告诉ts编译器 我确定e.detail.current 不会为空
  //这里不能使用？ 不然current会是一个number | undefined 类型
  activeIndex.value = e.detail!.current
}
</script>

<style lang="scss">
/* 轮播图 */
.carousel {
  height: 280rpx;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #efefef;
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
    display: flex;
    justify-content: center;
    .dot {
      width: 30rpx;
      height: 6rpx;
      margin: 0 8rpx;
      border-radius: 6rpx;
      background-color: rgba(255, 255, 255, 0.4);
    }
    .active {
      background-color: #fff;
    }
  }
  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
