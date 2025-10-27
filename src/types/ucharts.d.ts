declare module '@qiun/ucharts' {
  interface UChartsConfig {
    type: string
    context: any
    width: number
    height: number
    categories?: string[]
    series?: Array<{
      name: string
      data: number[]
      color?: string
    }>
    animation?: boolean
    background?: string
    color?: string[]
    padding?: number[]
    xAxis?: {
      disableGrid?: boolean
      itemCount?: number
      scrollShow?: boolean
      [key: string]: any
    }
    yAxis?: {
      gridType?: string
      dashLength?: number
      data?: Array<{ min?: number; max?: number; [key: string]: any }>
      [key: string]: any
    }
    legend?: {
      show?: boolean
      position?: string
      float?: string
      backgroundColor?: string
      borderColor?: string
      borderWidth?: number
      padding?: number
      margin?: number
      itemGap?: number
      fontSize?: number
      lineHeight?: number
      fontColor?: string
      [key: string]: any
    }
    extra?: {
      column?: {
        type?: string
        width?: number
        [key: string]: any
      }
      [key: string]: any
    }
    [key: string]: any
  }

  interface UChartsInstance {
    touchLegend(event: any): void
    showToolTip(event: any): void
    updateData(data: any): void
    resize(): void
    [key: string]: any
  }

  class uCharts implements UChartsInstance {
    constructor(config: UChartsConfig)
    touchLegend(event: any): void
    showToolTip(event: any): void
    updateData(data: any): void
    resize(): void
    [key: string]: any
  }

  export default uCharts
}
