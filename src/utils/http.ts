/**
 * 添加拦截器
 *
 * 拦截request请求
 * 拦截uploadFile文件上传
 *
 * TODO
 * 1.非HTTP开头的需要拼接地址
 * 2.请求超时
 * 3. 添加小程序的请求头信息
 * 4.添加token信息
 */

import { useMemberStore } from '@/stores'

//请求基地址
const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

//添加拦截器 拦截request请求 即uni.request
const httpInterceptor = {
  //拦截前触发 这个属性通过鼠标悬停在请求连接上获取
  //这个options是拦截的发送请求的参数
  invoke(options: UniApp.RequestOptions) {
    //1.非HTTP开头的需要拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseUrl + options.url
    }
    //2. 请求超时 默认是60s
    options.timeout = 10000

    //3. 添加小程序请求头信息
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }

    //4.添加token信息
    const memberStore = useMemberStore()
    //这里问号的左侧是为了防止memberStore.profile为空时访问token属性而报错
    const token = memberStore.profile?.token
    if (token) {
      //Bearer 是一种认证方式，用于在 HTTP 请求中传递访问令牌（access token）。
      //它通常用于保护 RESTful API，确保只有经过授权的用户才能访问受保护的资源。
      options.header.Authorization = token
    }
  },
}
//添加拦截器 拦截request请求
uni.addInterceptor('request', httpInterceptor)
//添加拦截器 拦截uploadFile文件上传
uni.addInterceptor('uploadFile', httpInterceptor)
