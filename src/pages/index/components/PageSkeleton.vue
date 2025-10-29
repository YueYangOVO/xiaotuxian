<!-- 该组件是页面骨架屏的组件 用于页面加载时显示页面内容的框架 -->
<!--
此文件为开发者工具生成，生成时间: 2025/10/29上午10:12:26
使用方法：
在 F:\newProjects\uniapps-projects\heima-shop\dist\dev\mp-weixin\pages\index\index.wxml 引入模板

```
<import src="index.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```
在 F:\newProjects\uniapps-projects\heima-shop\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```
-->
<template name="skeleton">
  <view is="components/XtxSwiper">
    <view class="carousel XtxSwiper--carousel">
      <swiper :autoplay="false" :circular="true" :interval="3000" :current="0"></swiper>
      <view class="indicator XtxSwiper--indicator">
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
      </view>
    </view>
  </view>
  <view is="pages/index/components/CategoryPanel">
    <view class="category CategoryPanel--category">
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-8-3333-6 sk-text"
          style="background-position-x: 50%"
          >居家</text
        >
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-8-3333-99 sk-text"
          style="background-position-x: 50%"
          >锦鲤</text
        >
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-8-3333-74 sk-text"
          style="background-position-x: 50%"
          >服饰</text
        >
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-8-3333-978 sk-text"
          style="background-position-x: 50%"
          >母婴</text
        >
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-8-3333-397 sk-text"
          style="background-position-x: 50%"
          >个护</text
        >
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-8-3333-456 sk-text"
          style="background-position-x: 50%"
          >严选</text
        >
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-8-3333-635 sk-text"
          style="background-position-x: 50%"
          >数码</text
        >
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-8-3333-887 sk-text"
          style="background-position-x: 50%"
          >运动</text
        >
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-8-3333-319 sk-text"
          style="background-position-x: 50%"
          >杂项</text
        >
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-8-3333-68 sk-text"
          style="background-position-x: 50%"
          >品牌</text
        >
      </navigator>
    </view>
  </view>
  <view is="pages/index/components/HotPanel">
    <view class="panel HotPanel--panel hot HotPanel--hot">
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-686 sk-text"
            >特惠推荐</text
          >
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-217 sk-text"
            >精选全攻略</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-222 sk-text"
            >爆款推荐</text
          >
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-173 sk-text"
            >最受欢迎</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-524 sk-text"
            >一站买全</text
          >
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-659 sk-text"
            >精心优选</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-768 sk-text"
            >新鲜好物</text
          >
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-500 sk-text"
            >生活加分项</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
    </view>
  </view>
  <view is="components/XtxGuess" class="r r">
    <view class="caption XtxGuess--caption">
      <text
        class="text XtxGuess--text sk-transparent sk-text-0-0000-409 sk-text sk-pseudo sk-pseudo-circle"
        >猜你喜欢</text
      >
    </view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-3333-963 {
  background-image: linear-gradient(
    transparent 3.3333%,
    #eeeeee 0%,
    #eeeeee 96.6667%,
    transparent 0%
  ) !important;
  background-size: 100% 27.1739rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-113 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 38.0435rpx;
  position: relative !important;
}
.sk-text-8-3333-6 {
  background-image: linear-gradient(
    transparent 8.3333%,
    #eeeeee 0%,
    #eeeeee 91.6667%,
    transparent 0%
  ) !important;
  background-size: 100% 30.4348rpx;
  position: relative !important;
}
.sk-text-8-3333-99 {
  background-image: linear-gradient(
    transparent 8.3333%,
    #eeeeee 0%,
    #eeeeee 91.6667%,
    transparent 0%
  ) !important;
  background-size: 100% 30.4348rpx;
  position: relative !important;
}
.sk-text-8-3333-74 {
  background-image: linear-gradient(
    transparent 8.3333%,
    #eeeeee 0%,
    #eeeeee 91.6667%,
    transparent 0%
  ) !important;
  background-size: 100% 30.4348rpx;
  position: relative !important;
}
.sk-text-8-3333-978 {
  background-image: linear-gradient(
    transparent 8.3333%,
    #eeeeee 0%,
    #eeeeee 91.6667%,
    transparent 0%
  ) !important;
  background-size: 100% 30.4348rpx;
  position: relative !important;
}
.sk-text-8-3333-397 {
  background-image: linear-gradient(
    transparent 8.3333%,
    #eeeeee 0%,
    #eeeeee 91.6667%,
    transparent 0%
  ) !important;
  background-size: 100% 30.4348rpx;
  position: relative !important;
}
.sk-text-8-3333-456 {
  background-image: linear-gradient(
    transparent 8.3333%,
    #eeeeee 0%,
    #eeeeee 91.6667%,
    transparent 0%
  ) !important;
  background-size: 100% 30.4348rpx;
  position: relative !important;
}
.sk-text-8-3333-635 {
  background-image: linear-gradient(
    transparent 8.3333%,
    #eeeeee 0%,
    #eeeeee 91.6667%,
    transparent 0%
  ) !important;
  background-size: 100% 30.4348rpx;
  position: relative !important;
}
.sk-text-8-3333-887 {
  background-image: linear-gradient(
    transparent 8.3333%,
    #eeeeee 0%,
    #eeeeee 91.6667%,
    transparent 0%
  ) !important;
  background-size: 100% 30.4348rpx;
  position: relative !important;
}
.sk-text-8-3333-319 {
  background-image: linear-gradient(
    transparent 8.3333%,
    #eeeeee 0%,
    #eeeeee 91.6667%,
    transparent 0%
  ) !important;
  background-size: 100% 30.4348rpx;
  position: relative !important;
}
.sk-text-8-3333-68 {
  background-image: linear-gradient(
    transparent 8.3333%,
    #eeeeee 0%,
    #eeeeee 91.6667%,
    transparent 0%
  ) !important;
  background-size: 100% 30.4348rpx;
  position: relative !important;
}
.sk-text-14-2857-686 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}
.sk-text-14-2857-217 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-14-2857-222 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}
.sk-text-14-2857-173 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-14-2857-524 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}
.sk-text-14-2857-659 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-14-2857-768 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}
.sk-text-14-2857-500 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-0-0000-409 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 30.7971rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
