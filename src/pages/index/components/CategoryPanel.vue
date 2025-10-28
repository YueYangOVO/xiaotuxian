<!-- 首页 轮播图下的10个类目 -->
<template>
  <view class="category">
    <navigator
      class="category-item"
      hover-class="none"
      url="/pages/index/index"
      v-for="item in categoryList"
      :key="item.id"
    >
      <image class="icon" :src="item.icon"></image>
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>

<script setup lang="ts">
import type { CategoryItem } from '@/types/home'

//接收父组件传递过来的数据
defineProps<{
  categoryList: CategoryItem[]
}>()
</script>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
/* 前台类目 */
.category {
  margin: 20rpx 0 0;
  padding: 10rpx 0;
  display: flex;
  flex-wrap: wrap;
  min-height: 328rpx;

  .category-item {
    width: 150rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    text-align: center;
    padding: 10rpx;

    .icon {
      width: 120rpx;
      height: 120rpx;
    }
    .text {
      font-size: 26rpx;
      color: #666;
      line-height: 1.2;
      word-break: break-all;
      text-align: center;
    }
  }
}
</style>
