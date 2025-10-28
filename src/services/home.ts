import type { BannerItem } from '@/types/home'
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
