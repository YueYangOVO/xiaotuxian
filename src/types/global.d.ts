/**
 * 通用分页结果的类型声明文件
 */
export type PageResult<> = {
  /**列表数据 */
  items: T[]

  /** 总条数 */
  counts: number

  /**当前页码 */
  page: number

  /**总页数 */
  pages: number

  /**每页条数 */
  pageSize: number
}
