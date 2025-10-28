/**
 * 这里是我们公共组件类型的声明文件
 * ===========
 * declare module '@vue/runtime-core'
 *  现调整为
 * declare module 'vue'
 */
import XtxSwiper from '@/components/XtxSwiper.vue'
import 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
  }
}
