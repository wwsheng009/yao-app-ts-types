export namespace YaoImport {
  //yao/importer/types.go
  // Importer 数据导入器
  export interface Importer {
    title?: string; // 导入名称
    process: string; // 处理器名称
    output?: string; // The process import output
    columns: Column[]; // 字段列表
    option?: Option; // 导入配置项
    rules?: { [key: string]: string }; // 许可导入规则
    // sid?: string; // sid
  }

  // Column 导入字段定义
  export interface Column {
    label: string; // 字段标签
    name: string; // 字段名称
    field: string; // 字段名称(原始值)
    match?: string[]; // 匹配建议
    rules?: string[]; // 清洗规则定义
    nullable?: boolean; // 是否可以为空
    primary?: boolean; // 是否为主键

    // key?: string; // 字段键名 Object Only
    // isArray?: boolean; // 字段是否为 Array
    // isObject?: boolean; // 字段是否为 Object
  }

  // Option 导入配置项定
  export interface Option {
    useTemplate?: boolean; // 使用已匹配过的模板
    templateLink?: string; // 默认数据模板链接
    chunkSize?: number; // 每次处理记录数量
    mappingPreview?: string; // 显示字段映射界面方式 auto 匹配模板失败显示, always 一直显示, never 不显示
    dataPreview?: string; // 数据预览界面方式 auto 有异常数据时显示, always 一直显示, never 不显示
  }

  // Mapping 字段映射表
  export interface Mapping {
    sheet: string; // 数据表
    colStart: number; // 第一列的位置
    rowStart: number; // 第一行的位置
    columns: Binding[]; // 字段数据列表
    autoMatching: boolean; // 是否自动匹配
    templateMatching: boolean; // 是否通过已传模板匹配
  }

  // Binding 数据绑定
  export interface Binding {
    label: string; // 目标字段标签
    field: string; // 目标字段名称
    name: string; // 源关联字段名称
    axis: string; // 源关联字段坐标
    value: string; // 示例数据
    rules: string[]; // 清洗规则
  }
}
