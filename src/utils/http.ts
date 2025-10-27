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

/**
 * 请求函数
 * @param  UniApp.RequestOptions
 * @returns Promise
 *  1. 返回 Promise 对象，用于处理返回值类型
 *  2. 获取数据成功
 *    2.1 提取核心数据 res.data
 *    2.2 添加类型，支持泛型
 *  3. 获取数据失败
 *    3.1 401错误  -> 清理用户信息，跳转到登录页
 *    3.2 其他错误 -> 根据后端错误信息轻提示
 *    3.3 网络错误 -> 提示用户换网络
 */

//给Promise添加返回数据的类型 支持泛型 T是泛型参数，用于指定返回数据的类型
interface Data<T> {
  code: string
  msg: string
  data: T
}

//2.2设置返回数据的类型为Data<T>
export const http = <T>(options: UniApp.RequestOptions) => {
  //1.返回Promise对象
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      //请求响应成功
      success(res) {
        // 状态码2xx 表示请求成功
        if (res.statusCode >= 200 && res.statusCode < 300) {
          //2.1 提取核心数据 res.data
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          //401错误  -> 清理用户信息，跳转到登录页
          useMemberStore().clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          //其他错误， =》根据后端错误提示显示
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求失败',
            mask: true,
          })
          reject(res)
        }
      },
      //请求相应失败 这里主要是用户的网络没了， success主要是后端发过来信息就是成功
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误 请稍后试试',
          mask: true,
        })
        reject(err)
      },
    })
  })
}
