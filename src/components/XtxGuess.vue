<!-- 猜你喜欢公共组件 -->
<template>
  <!-- 猜你喜欢 -->
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <navigator
      class="guess-item"
      v-for="item in guessList"
      :key="item.id"
      :url="`/pages/goods/goods?id=4007498`"
    >
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="name"> {{ item.name }} </view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text">{{ isBottom ? '没有更多了~' : '正在加载...' }}</view>
</template>

<script setup lang="ts">
// 获取猜你喜欢的公共数据，因为这是个公共组件，我们直接在组件内拿数据
//不同页面调用数据是一样的
import { ref } from 'vue'
import { getHomeGuessLikeAPI } from '@/services/home'
import type { GuessItem } from '@/types/home'
import type { PageParams } from '@/types/global'
import { onMounted } from 'vue'

//定义分页查询参数
//因为我们在调用接口时设置了分页参数可以不传递这会导致他undefined
//所以这里我们使用required 来告诉ts 这个pageParams 必须有这两个属性
const pageParams: Required<PageParams> = {
  page: 1,
  pageSize: 10,
}

//1. start ==================获取分页查询数据===============
//查询结果集合
const guessList = ref<GuessItem[]>([])
//定义查询到页面底部的参数
const isBottom = ref(false)
//调用接口 获取分页查询数据
const getGuessLike = async () => {
  //判断是否到底部了
  if (isBottom.value) {
    return uni.showToast({
      title: '没有更多了~',
      icon: 'none',
    })
  }
  const res = await getHomeGuessLikeAPI(pageParams)
  //console.log(res.result.items)
  //下拉追加内容
  guessList.value = [...guessList.value, ...res.result.items]

  //判断页码是否小于页面的总数
  if (pageParams.page < res.result.pages) {
    //更新分页参数中的页码
    pageParams.page++
  } else {
    isBottom.value = true
  }
}

//将查询列表数据暴漏给父组件使用
defineExpose({
  getMore: getGuessLike,
})
// end -------------------------------------------------------

//这里使用组件挂载完毕 调用
onMounted(() => {
  getGuessLike()
})
</script>

<style lang="scss">
:host {
  display: block;
}
/* 分类标题 */
.caption {
  display: flex;
  justify-content: center;
  line-height: 1;
  padding: 36rpx 0 40rpx;
  font-size: 32rpx;
  color: #262626;
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 28rpx 0 30rpx;

    &::before,
    &::after {
      content: '';
      width: 20rpx;
      height: 20rpx;
      background-image: url(@/static/images/bubble.png);
      background-size: contain;
      margin: 0 10rpx;
    }
  }
}

/* 猜你喜欢 */
.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx;
  .guess-item {
    width: 345rpx;
    padding: 24rpx 20rpx 20rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    overflow: hidden;
    background-color: #fff;
  }
  .image {
    width: 304rpx;
    height: 304rpx;
  }
  .name {
    height: 75rpx;
    margin: 10rpx 0;
    font-size: 26rpx;
    color: #262626;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    line-height: 1;
    padding-top: 4rpx;
    color: #cf4444;
    font-size: 26rpx;
  }
  .small {
    font-size: 80%;
  }
}
// 加载提示文字
.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0;
}
</style>
