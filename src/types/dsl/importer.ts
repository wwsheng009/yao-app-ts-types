export namespace YaoImport {
  //yao/importer/types.go

  /**数据导入器 */
  export interface Importer {
    /**导入名称*/
    title?: string;
    /**处理器名称*/
    process: string;
    /**The process import output*/
    output?: string;
    /**字段列表*/
    columns: Column[];
    /**导入配置项*/
    option?: Option;
    /**许可导入规则*/
    rules?: { [key: string]: string };
    // sid?: string; sid
    $schema?: string;
  }

  /**导入字段定义 */
  export interface Column {
    /**字段标签 */
    label: string;
    /**字段名称 */
    name: string;
    /**字段名称(原始值) */
    field: string;
    /**匹配建议 */
    match?: string[];
    /**清洗规则定义 */
    rules?: string[];
    /**是否可以为空 */
    nullable?: boolean;
    /**是否为主键 */
    primary?: boolean;

    // key?: string; 字段键名 Object Only
    // isArray?: boolean; 字段是否为 Array
    // isObject?: boolean; 字段是否为 Object
  }

  /**导入配置项定 */
  export interface Option {
    /**使用已匹配过的模板 */
    useTemplate?: boolean;
    /**默认数据模板链接 */
    templateLink?: string;
    /**每次处理记录数量 */
    chunkSize?: number;
    /**显示字段映射界面方式 auto 匹配模板失败显示, always 一直显示, never 不显示 */
    mappingPreview?: string;
    /**数据预览界面方式 auto 有异常数据时显示, always 一直显示, never 不显示 */
    dataPreview?: string;
  }

  /**字段映射表 */
  export interface Mapping {
    /**数据表 */
    sheet: string;
    /**第一列的位置 */
    colStart: number;
    /**第一行的位置 */
    rowStart: number;
    /**字段数据列表 */
    data: Binding[];
    /**是否自动匹配 */
    autoMatching: boolean;
    /**是否通过已传模板匹配 */
    templateMatching: boolean;
  }

  /** 数据绑定*/
  export interface Binding {
    /**目标字段标签 */
    label: string;
    /**目标字段名称 */
    field: string;
    /**源关联字段名称 */
    name: string;
    /**源关联字段坐标 */
    axis: string;
    /**示例数据 */
    value: string;
    /**清洗规则 */
    rules: string[];
  }
}
