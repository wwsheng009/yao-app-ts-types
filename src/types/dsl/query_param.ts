export namespace YaoQueryParam {
  /**QueryParam 数据查询器参数 */
  export interface QueryParam {
    /**模型名称 */
    model?: string;
    /**表格名称 */
    table?: string;
    /**别名 */
    alias?: string;
    /**导出数据时的前缀 */
    export?: string;
    /**| Array<String\>                   | 选择字段清单*/
    select?: string[];
    /**| Array<Object Where\>             | 查询条件*/
    wheres?: QueryWhere[];
    /**| Array<Object Order\>             | 排序条件*/
    orders?: QueryOrder[];
    /**Integer                          | 限制返回记录条目*/
    limit?: number;
    /**Integer                          | 当前页码*/
    page?: number;
    /**Integer                          | 每页显示记录数量*/
    pagesize?: number;
    /**读取关联模型*/
    withs?: { [key: string]: QueryWith }; //Map<string, QueryWith>;
  }

  /**QueryOrder Order 查询排序 */
  export interface QueryOrder {
    /**如按关联模型的字段排序，则填写关联模型名称*/
    rel?: string;
    /**字段名称*/
    column: string;
    /**排序方式， `desc`, `asc`, 默认为 `asc`*/
    option?: string;
  }
  /**
   *  QueryWhere Where 查询条件
   */
  export interface QueryWhere {
    /**如按关联模型的字段查询，则填写关联模型名称 */
    rel?: string;
    /**字段名称*/
    column?: string;
    /**匹配数值*/
    value?: string;
    /**查询方法 `where`,`orwhere`, `wherein`, `orwherein`... 默认为 `where`,
     *
     *| 查询方法 | 说明                                  |
     *| -------- | ------------------------------------- |
     *| where    | WHERE 字段 = 数值, WHERE 字段 >= 数值 |
     *| orwhere  | ... OR WHERE 字段 = 数值              |
     */
    method?: string;
    /**匹配关系 `eq`,`like`,`in`,`gt` 等默认为 `eq`
     *
     *| 匹配关系 | 说明                             |
     *| -------- | -------------------------------- |
     *| eq       | 默认值 等于 WHERE 字段 = 数值    |
     *| like     | 匹配 WHERE 字段 like 数值        |
     *| match    | 匹配 WHERE 字段 全文检索 数值    |
     *| gt       | 大于 WHERE 字段 > 数值           |
     *| ge       | 大于等于 WHERE 字段 >= 数值      |
     *| lt       | 小于 WHERE 字段 < 数值           |
     *| le       | 小于等于 WHERE 字段 <= 数值      |
     *| null     | 为空 WHERE 字段 IS NULL          |
     *| notnull  | 不为空 WHERE 字段 IS NOT NULL    |
     *| in       | 列表包含 WHERE 字段 IN (数值...) |
     *| ne       | 不等于匹配值                     |
     */
    op?: string;
    /**分组查询 */
    wheres?: QueryWhere[];
  }

  /**With relations 关联查询 */
  export interface QueryWith {
    name: string;
    query: QueryParam;
  }
}
