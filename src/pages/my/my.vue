<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '黑马先锋',
          token: '123456',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="sendMsg" size="mini" plain type="warn">发送请求</button>
  </view>
</template>

<script setup lang="ts">
import { useMemberStore } from '@/stores'

const memberStore = useMemberStore()

function sendMsg() {
  uni.request({
    url: '/home/banner',
    method: 'GET',
    success: (res) => {
      console.log('请求成功:', res)
      uni.showToast({
        title: '请求成功',
        icon: 'success',
      })
    },
    fail: (err) => {
      console.error('请求失败:', err)
      uni.showToast({
        title: '请求失败',
        icon: 'error',
      })
    },
  })
}
</script>

<style lang="scss">
//
</style>
