import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { http } from '@/utils/http'

//首页前端接口

/**
 * 首页广告区域的轮播图，投放位置，1表示首页 2表示分类页
 * 默认是1
 * @param distributionSite 1表示首页 2表示分类页
 * @returns
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  //注意这里返回结果result是一个数组，里面是对象
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

/**
 * 首页获取类目数据
 * @returns
 */
export const getCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

export const getHotItemAPI = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}
