/**
 * 通用公共组件的类型声明文件
 * 这里是我们公共组件类型的声明文件
 * ===========
 * declare module '@vue/runtime-core'
 *  现调整为
 * declare module 'vue'
 */
import XtxSwiper from '@/components/XtxSwiper.vue'
import XtxGuess from '@/components/XtxGuess.vue'
import 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    /** 自定义轮播图组件 声明为组件类型 */
    XtxSwiper: typeof XtxSwiper
    /** 自定义猜你喜欢组件 声明为组件类型 */
    XtxGuess: typeof XtxGuess
  }
}

//定义猜你喜欢组件的实例类型
//将组件类型转换为组件实例类型
export type XtxGuessInstance = InstanceType<typeof XtxGuess>
