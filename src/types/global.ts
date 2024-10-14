
/**
 * 分页处理器返回结果
 */
export interface ModelPaginateResult<T> {
    /**数据记录集合 */
    data: T[];
    /**下一页，如没有下一页返回-1*/
    next: number;
    /**上一页，如没有上一页返回-1*/
    prev: number;
    /**当前页码 */
    page: number;
    /**每页记录数量 */
    pagesize: number;
    /**总页数 */
    pagecnt: number;
    /**总记录数 */
    total: number;
  }
  