import XtxSwiper from './XtxSwiper.vue'
//这里存放公共组件的类型 这个可以写到types文件夹当中
// src/types/components.d.ts
declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
  }
}
