import { YaoQueryParam } from "./query_param";

export namespace YaoModel {
  // Relationship types
  export enum RelationEnum {
    RelHasOne = "hasOne", // 1 v 1
    RelHasMany = "hasMany", // 1 v n
    // RelBelongsTo = "belongsTo", // inverse  1 v 1 / 1 v n / n v n
    RelHasOneThrough = "hasOneThrough", // 1 v 1 ( t1 <-> t2 <-> t3)
    // RelHasManyThrough = "hasManyThrough", // 1 v n ( t1 <-> t2 <-> t3)
    // RelBelongsToMany = "belongsToMany", // 1 v1 / 1 v n / n v n
    // RelMorphOne = "morphOne",
    // RelMorphMany = "morphMany",
    // RelMorphToMany = "morphToMany",
    // RelMorphByMany = "morphByMany",
    // RelMorphMap = "morphMap",
  }

  // Model 数据模型
  //   export interface Model {
  //     ID?:  string;
  //     Name?:  string;
  //     Source?:  string;
  //     Driver?:  string; // Driver
  //     MetaData?:  MetaData;
  //     Columns?:  { [key?:  string]?:  Column | undefined }; // 字段映射表
  //     ColumnNames?:  any[]; // 字段名称清单
  //     PrimaryKey?:  string; // 主键(单一主键)
  //     PrimaryKeys?:  string[]; // 主键(联合主键)
  //     UniqueColumns?:  Column[]; // 唯一字段清单
  //   }

  // MetaData 元数据
  export interface ModelDSL {
    /**String|模型中文名称*/
    name?: string; // 元数据名称
    connector?: string; // Bind a connector, MySQL, SQLite, Postgres, Clickhouse, Tidb, Oracle support. default is SQLite
    /**Object|数据表定义*/
    table?: Table; // 数据表选项
    /**Array\<Object\>|字段定义*/
    columns?: Column[]; // 字段定义
    /**Array\<Object\>|索引定义*/
    indexes?: Index[]; // 索引定义
    /**\[key:String\]:Object|关系映射|非填项|*/
    relations?: { [key: string]: Relation | undefined }; // 映射关系定义
    /**Array\<Object\>|默认数据*/
    values?: any[]; // 初始数值
    /**Object|配置选型*/
    option?: Option; // 元数据配置
  }

  export enum ColumnFieldTypeEnum {
    "字符串" = "string",
    "字符" = "char",
    "文本" = "text",
    "中文本" = "mediumText",
    "长文本" = "longText",
    "二进制数据" = "binary",
    "日期" = "date",
    "日期时间" = "datetime",
    "带时区的日期时间" = "datetimeTz",
    "时间" = "time",
    "带时区的时间" = "timeTz",
    "时间戳" = "timestamp",
    "带时区的时间戳" = "timestampTz",
    "微整型" = "tinyInteger",
    "无符号微整型+自增" = "tinyIncrements",
    "无符号微整型" = "unsignedTinyInteger",
    "小整型" = "smallInteger",
    "无符号小整型+自增" = "smallIncrements",
    "无符号小整型" = "unsignedSmallInteger",
    "整型" = "integer",
    "无符号整型+自增" = "increments",
    "无符号整型" = "unsignedInteger",
    "长整型" = "bigInteger",
    "无符号长整型+自增" = "bigIncrements",
    "无符号长整型" = "unsignedBigInteger",
    "长整型+自增" = "id",
    "长整型+自增(同id)" = "ID",
    "小数(一般用于存储货币)" = "decimal",
    "无符号小数(一般用于存储货币)" = "unsignedDecimal",
    "浮点数" = "float",
    "无符号浮点数" = "unsignedFloat",
    "双精度" = "double",
    "无符号双精度" = "unsignedDouble",
    "布尔型" = "boolean",
    "枚举型" = "enum",
    "JSON文本" = "json",
    "JSON文本(同json)" = "JSON",
    "JSON(二进制格式存储)" = "jsonb",
    "JSON(二进制格式存储同jsonb)" = "JSONB",
    "UUID格式字符串" = "uuid",
    "IP地址" = "ipAddress",
    "MAC地址" = "macAddress",
    "年份" = "year",
  }
  // Column the field description struct
  export interface Column {
    /**String|字段显示名称，用于在管理表单，开发平台等成场景下呈现*/
    label?: string;
    /**String|字段名称，对应数据表中字段名称*/
    name: string;
    /**String|字段类型*/
    type?: string | ColumnFieldTypeEnum;
    /**String|字段标题，可用于开发平台中呈现*/
    title?: string;
    /**String|字段介绍，可用于开发平台中呈现*/
    description?: string;
    /**String|字段注释，对应数据表中字段注释*/
    comment?: string;
    /**Integer|字段长度，对 `string` 等类型字段有效*/
    length?: number;
    /**Integer|字段位数(含小数位)，对 `float`、`decimal` 等类型字段有效*/
    precision?: number;
    /**Integer|字段小数位位数，对 `float`、`decimal` 等类型字段有效*/
    scale?: number;
    /**Bool|字段是否可以为空，默认为 false*/
    nullable?: boolean;
    /**Array\<String\>|字段许可值，对 `enum` 类型字段有效*/
    option?: string[];
    /**String\|Integer\|Float|字段默认值*/
    default?: any;
    /**String|字段默认值，支持数据库函数，如 `NOW()` default 和 default_raw 同时存在 default_raw 优先级高*/
    default_raw?: string;
    example?: any;
    generate?: string; // Increment, UUID,...
    /**String|字段加密存储方式。许可值 `AES(MySQL Only)`, `PASSWORD`*/
    crypt?: string; // AES, PASSWORD, AES-256, AES-128, PASSWORD-HASH, ...
    /**Array\<Object\>|字段校验规则*/
    validations?: Validation[];
    /**Bool|字段是否为索引，默认为 false*/
    index?: boolean;
    /**Bool|字段是否为唯一索引，默认为 false , 如为 true 无需同时将 `index` 设置为 true*/
    unique?: boolean;
    /**Bool|字段是否为主键，每张表至多一个主键字段。默认为 false*/
    primary?: boolean;
    model?: ModelDSL | undefined;
  }

  // Validation the field validation struct
  export interface Validation {
    /**校验方法名称，可选值 `typeof`, `pattern`, `min`,`max`,`enum`,`minLength`,`maxLength`,  `email`,`mobile`
     *
     *typeof    | `[<String>]` 许可值 `string`, `integer`, `float`, `number`, `datetime`, `timestamp`
     *
     *min       | `[<Integer\|Float>]`
     *
     *max       | `[<Integer\|Float>]`
     *
     *enum      | `[String...]`
     *
     *pattern   | `[String]`
     *
     *minLength | `[<Integer>]`
     *
     *maxLength | `[<Integer>]`
     *
     *email     | `邮件地址格式username@domain`
     *
     *mobile    | `[<String>]` 电话
     *
     */
    method: string;
    /**校验方法参数，例如 `[20]`, `["^1[3-9]\\d{9}$"]`*/
    args?: any[];
    /**如校验不通过，返回的错误提示。支持使用 `{{<name>}}` 引用字段信息, 如`{{label}}`将被替换为字段 `label`中定义的数值; `{{input}}` 被替换为用户输入数值。*/
    message?: string;
  }

  // ValidateResponse 数据校验返回结果
  //   export interface ValidateResponse {
  //     line?: number;
  //     column?: string;
  //     messages?: string[];
  //   }

  // Index the search index struct
  export interface Index {
    comment?: string;
    name?: string;
    columns?: string[];
    type?: string; // primary,unique,index,match
  }

  // Table the model mapping table in DB
  export interface Table {
    /**数据表名称*/
    name?: string; // optional, if not set, the default is generate from model name. eg name.space.user, table name is name_space_user
    prefix?: string; // optional, the table prefix
    /**数据表注释中文名*/
    comment?: string;
    /**数据表引擎（MySQL ONLY) 许可值 `InnoDB`, `MyISAM`*/
    engine?: string; // InnoDB,MyISAM ( MySQL Only )
    collation: string;
    charset: string;
    primaryKeys: string[];
  }

  // Relation the new xun model relation
  export interface Relation {
    // name: string;
    /**与当前数据模型的关系类型. `hasOne` 一对一, `hasMany` 一对多。*/
    type: string | RelationEnum;
    /** **关联数据模型** 字段的名称，用于关联映射 (关联数据模型.key = 当前数据模型.foreign)*/
    key?: string;
    /** **关联数据模型** 名称*/
    model?: string;
    /** **当前数据模型** 字段的名称，用于关联映射 (关联数据模型.key = 当前数据模型.foreign)*/
    foreign?: string;
    links?: Relation[];
    /** **关联数据模型** 的查询条件，可以在查询时重载。 例: `{ "select": ["id", "name"] }`*/
    query?: YaoQueryParam.QueryParam;
  }

  // Option 模型配置选项
  export interface Option {
    timestamps?: boolean; // + created_at, updated_at 字段
    soft_deletes?: boolean; // + deleted_at 字段
    trackings?: boolean; // + created_by, updated_by, deleted_by 字段
    constraints?: boolean; // + 约束定义
    permission?: boolean; // + __permission 字段
    logging?: boolean; // + __logging_id 字段
    read_only?: boolean; // Ignore the migrate operation
  }

  // ColumnMap ColumnMap 字段映射
  //   export interface ColumnMap {
  //     column?: Column;
  //     model?: ModelDSL;
  //     export?: string; // 取值时的变量名
  //   }

  // ExportData the export data struct
  export interface ExportData {
    model?: string;
    columns?: string[];
    values?: any[][];
  }
}
