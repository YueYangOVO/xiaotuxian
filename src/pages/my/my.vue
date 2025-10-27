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
import { http } from '@/utils/http'
const memberStore = useMemberStore()

const sendMsg = async () => {
  const res = await http<string[]>({
    url: '',
    method: 'GET',
    header: {},
  })
  console.log(res)
}
</script>

<style lang="scss">
//
</style>
