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
