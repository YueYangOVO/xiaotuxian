//该文件是首页像后端请求结果的数据类型定义文件

/**
 * 首页广告部分的数据类型
 * 对应返回数据的类型 ，返回一个数组，数组中是对象
 */
export type BannerItem = {
  /** 跳转链接 */
  hrefUrl: string
  /** id */
  id: string
  /** 图片链接 */
  imgUrl: string
  /** 跳转类型 */
  type: number
}

/**
 * 首页前台分类从后端接收结果的数据类型
 */
export type CategoryItem = {
  /** 分类名称 */
  name: string
  /** 分类图标 */
  icon: string
  /** 分类id */
  id: string
}

/**
 * 首页热门推荐的数据类型
 */
export type HotItem = {
  /**
   * 说明
   */
  alt: string
  /**
   * 商品id
   */
  id: string
  /**
   * 图片集合
   */
  pictures: string[]
  /**
   * 跳转链接
   */
  target: string
  /**
   * 标题
   */
  title: string
  /**
   * 推荐类型
   */
  type: string
}

/** 猜你喜欢-商品类型 */
export type GuessItem = {
  /** 商品描述 */
  desc: string
  /** 商品折扣 */
  discount: number
  /** id */
  id: string
  /** 商品名称 */
  name: string
  /** 商品已下单数量 */
  orderNum: number
  /** 商品图片 */
  picture: string
  /** 商品价格 */
  price: number
}
