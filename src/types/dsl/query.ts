/**QueryOrder Order 查询排序 */

export namespace YaoQuery {
  /**QueryDSL Gou Query Domain Specific Language*/

  export interface QueryDSL {
    /**选择字段列表*/
    select?: Array<string>;
    /**查询数据表名称或数据模型*/
    from?: string;
    /**数据查询条件*/
    wheres?: Array<Where> | Recordable;
    /**排序条件*/
    orders?: Orders;
    /**记录开始位置*/
    offset?: number;
    /**读取数据的数量*/
    limit?: number;
    /**分页查询当前页面页码*/
    page?: number;
    /**每页读取记录数量*/
    pagesize?: number;
    /**设定为 true, 查询结果为 []Record; 设定为 false, 查询结果为 Paginate, 仅在设定 `page` 或 `pagesize`时有效。*/
    "data-only"?: boolean;
    /**聚合字段和统计层级设置*/
    groups?: Groups;
    /**聚合查询结果筛选, 仅在设定 `groups` 时有效*/
    havings?: Array<Having>;
    /**联合查询。多个查询将结果合并为一张表*/
    unions?: Array<QueryDSL>;
    /**子查询。按 QueryDSL 描述查询逻辑，生成一张二维数据表或数值。*/
    query?: QueryDSL;
    /**子查询别名*/
    name?: string;
    /**表连接。连接数据量较大的数据表时 **不推荐使用**。| 否 |*/
    joins?: Array<Join>;
    /**SQL 语句。**非必要，勿使用***/
    sql?: SQL;
    /**查询条件注释，用于帮助理解查询条件逻辑和在开发平台中呈现。*/
    comment?: string;
    /**是否开启调试(开启后计入查询日志)*/
    debug?: boolean;
  }
  export type Recordable<T = any> = Record<string, T>;
  /**QueryCondition 查询条件*/
  export interface Condition {
    /**查询字段*/
    field?: string;
    /**匹配数值*/
    value?: string;
    /**匹配关系运算符*/
    op?: string;
    /**true 查询条件逻辑关系为 or, 默认为 false 查询条件逻辑关系为 and*/
    or?: string;
    /**子查询, 如设定 query 则忽略 value 数值。*/
    query?: string;
    /**查询条件注释*/
    comment?: string;
  }
  /**Where 查询条件*/
  export interface Where extends Condition {
    /**分组查询。用于 condition 1 and ( condition 2 OR condition 3) 的场景*/
    wheres: Where[];
  }
  /**Order 排序条件*/
  export interface Order {
    /**排序字段*/
    field: string;
    /**排序方式*/
    sort?: string;
    /**查询条件注释*/
    comment?: string;
  }

  /**Orders 排序条件集合*/
  export type Orders = Order[];

  /**Group 聚合条件*/
  export interface Group {
    /**排序字段*/
    field?: Expression;
    /**同时返回多层级统计结果，对应聚合字段数值的名称。*/
    rollup?: string;
    /**查询条件注释*/
    comment?: string;
  }
  /**Groups 聚合条件集合*/
  export type Groups = Group[];

  /**Having 聚合结果筛选条件*/
  export interface Having {
    /**分组查询。用于 condition 1 and ( condition 2 OR condition 3) 的场景*/
    havings?: Having[];
  }
  export type Table = string;
  export type Expression = string;
  /**Join 数据表连接*/
  export interface Join {
    /**查询数据表名称或数据模型*/
    from?: Table;
    /**关联连接表字段名称*/
    key?: Expression;
    /**关联目标表字段名称(需指定表名或别名)*/
    foreign?: Expression;
    /**true 连接方式为 LEFT JOIN, 默认为 false 连接方式为 JOIN*/
    left?: boolean;
    /**true 连接方式为 RIGHT JOIN, 默认为 false 连接方式为 JOIN*/
    right?: boolean;
    /**关联条件注释*/
    comment?: string;
  }

  /**SQL 语句*/
  export interface SQL {
    /**SQL 语句,不可跟其它sql查询条件一起混用*/
    stmt?: string;
    /**绑定参数表*/
    args?: any[];
    /**SQL语句注释*/
    comment?: string;
  }
}
