<template>
  <view class="cart">
    <view class="chart-container">
      <view class="chart-title">销售数据图表</view>
      <canvas canvas-id="myChart" id="myChart" class="charts" @tap="handleTap" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import uCharts from '@qiun/ucharts'

// 响应式数据
const cWidth = ref(750)
const cHeight = ref(500)

// 存储图表实例
let uChartsInstance: Record<string, InstanceType<typeof uCharts>> = {}

// 获取服务器数据（模拟）
const getServerData = () => {
  return new Promise((resolve) => {
    // 模拟从服务器获取数据时的延时
    setTimeout(() => {
      const res = {
        categories: ['2019', '2020', '2021', '2022', '2023', '2024'],
        series: [
          {
            name: '目标值',
            data: [35, 36, 31, 33, 43, 34],
          },
          {
            name: '完成量',
            data: [18, 27, 21, 24, 36, 28],
          },
        ],
      }
      resolve(res)
    }, 500)
  })
}

// 绘制图表
const drawCharts = (id: string, data: any) => {
  const ctx = uni.createCanvasContext(id)

  uChartsInstance[id] = new uCharts({
    type: 'column',
    context: ctx,
    width: cWidth.value,
    height: cHeight.value,
    categories: data.categories,
    series: data.series,
    animation: true,
    background: '#FFFFFF',
    color: ['#1890FF', '#91CB74', '#FAC858', '#EE6666', '#73C0DE', '#3CA272'],
    padding: [15, 15, 0, 5],
    xAxis: {
      disableGrid: true,
      itemCount: 4,
      scrollShow: true,
    },
    yAxis: {
      gridType: 'dash',
      dashLength: 2,
      data: [{ min: 0 }],
    },
    legend: {
      show: true,
      position: 'bottom',
      float: 'center',
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: 'rgba(0,0,0,0)',
      borderWidth: 0,
      padding: 5,
      margin: 5,
      itemGap: 10,
      fontSize: 13,
      lineHeight: 11,
      fontColor: '#666666',
    },
    extra: {
      column: {
        type: 'group',
        width: (cWidth.value * 0.45) / data.categories.length,
      },
    },
  })
}

// 处理点击事件
const handleTap = (e: any) => {
  const chartId = e.target.id
  if (uChartsInstance[chartId]) {
    uChartsInstance[chartId].touchLegend(e)
    uChartsInstance[chartId].showToolTip(e)
  }
}

// 初始化图表
const initChart = async () => {
  try {
    // 这里的 750 对应 css .charts 的 width
    cWidth.value = uni.upx2px(750)
    // 这里的 500 对应 css .charts 的 height
    cHeight.value = uni.upx2px(500)

    // 获取数据并绘制图表
    const data = await getServerData()
    drawCharts('myChart', data)
  } catch (error) {
    console.error('初始化图表失败:', error)
    uni.showToast({
      title: '图表加载失败',
      icon: 'none',
    })
  }
}

// 页面加载完成后初始化图表
onMounted(() => {
  // 延迟一下确保 canvas 元素已经渲染
  setTimeout(() => {
    initChart()
  }, 100)
})
</script>

<style lang="scss" scoped>
.cart {
  padding: 20rpx;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.chart-container {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 30rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
}

.chart-title {
  font-size: 32rpx;
  font-weight: 600;
  color: #333333;
  text-align: center;
  margin-bottom: 30rpx;
}

.charts {
  width: 750rpx;
  height: 500rpx;
  background-color: #ffffff;
}
</style>
