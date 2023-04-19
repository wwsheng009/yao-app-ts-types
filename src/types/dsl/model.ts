import YaoChart from "./chart";
import YaoComponent from "./component";
import YaoForm from "./form";
import YaoList from "./list";
import { YaoQuery } from "./query";
import { YaoQueryParam } from "./query_param";
import YaoTable from "./table";

export namespace YaoModel {
  // Relationship types
  // export type RelationEnum = "hasOne" | "hasMany" | "hasOneThrough";

  // {
  //   RelHasOne = "hasOne", // 1 v 1
  //   RelHasMany = "hasMany", // 1 v n
  //   // RelBelongsTo = "belongsTo", // inverse  1 v 1 / 1 v n / n v n
  //   RelHasOneThrough = "hasOneThrough", // 1 v 1 ( t1 <-> t2 <-> t3)
  //   // RelHasManyThrough = "hasManyThrough", // 1 v n ( t1 <-> t2 <-> t3)
  //   // RelBelongsToMany = "belongsToMany", // 1 v1 / 1 v n / n v n
  //   // RelMorphOne = "morphOne",
  //   // RelMorphMany = "morphMany",
  //   // RelMorphToMany = "morphToMany",
  //   // RelMorphByMany = "morphByMany",
  //   // RelMorphMap = "morphMap",
  // }

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
  /**模型元数据 */
  export interface ModelDSL {
    /**版本【管理字段】 */
    version?: string;
    /**描述【管理字段】 */
    description?: string;
    /**备注【管理字段】 */
    comment?: string;
    /**标签 */
    label?: string;
    /**模型名称*/
    name?: string; // 元数据名称
    /** Bind a connector, MySQL, SQLite, Postgres, Clickhouse, Tidb, Oracle support. default is SQLite*/
    /**数据表定义*/
    connector?: string;
    /**数据表选项 */
    table?: Table;
    /**字段定义*/
    columns?: ModelColumn[];
    /**索引定义*/
    indexes?: Index[];
    /**映射关系定义*/
    relations?: { [key: string]: Relation | undefined };
    /**默认数据*/
    values?: any[];
    /**配置选型*/
    option?: ModelOption;
    /**自定义扩展 */
    custom?: { [key: string]: any };
    /**ui设计器 */
    xgen?: Xgen; //{ [key: string]: Design };
    $schema?: string;
  }

  export interface Xgen {
    menu?: {
      /**不显示在菜单上 */
      no_display?: boolean;
    };
    form?: Partial<YaoForm.FormDSL>;
    list?: Partial<YaoList.ListDSL>;
    table?: Partial<YaoTable.TableDSL>;
  }

  export type ColumnFieldTypeEnum =
    | "string" //"字符串",
    | "char" //"字符",
    | "text" //"文本",
    | "mediumText" //"中文本",
    | "longText" //"长文本",
    | "binary" //"二进制数据",
    | "date" //"日期",
    | "datetime" //"日期时间",
    | "datetimeTz" //"带时区的日期时间",
    | "time" //"时间",
    | "timeTz" //"带时区的时间",
    | "timestamp" //"时间戳",
    | "timestampTz" //"带时区的时间戳",
    | "tinyInteger" //"微整型",
    | "tinyIncrements" //"无符号微整型+自增",
    | "unsignedTinyInteger" //"无符号微整型",
    | "smallInteger" //"小整型",
    | "smallIncrements" //"无符号小整型+自增",
    | "unsignedSmallInteger" //"无符号小整型",
    | "integer" //"整型",
    | "increments" //"无符号整型+自增",
    | "unsignedInteger" //"无符号整型",
    | "bigInteger" //"长整型",
    | "bigIncrements" //"无符号长整型+自增",
    | "unsignedBigInteger" //"无符号长整型",
    | "id" //"长整型+自增",
    | "ID" //"长整型+自增(同id)",
    | "decimal" //"小数(一般用于存储货币)",
    | "unsignedDecimal" //"无符号小数(一般用于存储货币)",
    | "float" //"浮点数",
    | "unsignedFloat" //"无符号浮点数",
    | "double" //"双精度",
    | "unsignedDouble" //"无符号双精度",
    | "boolean" //"布尔型",
    | "enum" //"枚举型",
    | "json" //"JSON文本",
    | "JSON" //"JSON文本(同json)",
    | "jsonb" //"JSON(二进制格式存储)",
    | "JSONB" //"JSON(二进制格式存储同jsonb)",
    | "uuid" //"UUID格式字符串",
    | "ipAddress" //"IP地址",
    | "macAddress" //"MAC地址",
    | "year"; //"年份"
  // Column the field description struct

  export type ColumnOption = string | number | boolean;

  /**模型中的字段定义 */
  export interface ModelColumn {
    /**字段显示名称，用于在管理表单，开发平台等成场景下呈现*/
    label: string;
    /**字段名称，对应数据表中字段名称*/
    name: string;
    /**字段类型*/
    type: ColumnFieldTypeEnum | string;
    /**字段标题，可用于开发平台中呈现*/
    title?: string;
    /**字段介绍，可用于开发平台中呈现*/
    description?: string;
    /**字段注释，对应数据表中字段注释*/
    comment?: string;
    /**字段长度，对 `string` 等类型字段有效*/
    length?: number;
    /**字段位数(含小数位)，对 `float`、`decimal` 等类型字段有效*/
    precision?: number;
    /**字段小数位位数，对 `float`、`decimal` 等类型字段有效*/
    scale?: number;
    /**字段是否可以为空，默认为 false*/
    nullable?: boolean;
    /**字段许可值，对 `enum` 类型字段有效*/
    option?: ColumnOption[];
    /**string\|number\|float|字段默认值*/
    default?: any;
    /**字段默认值，支持数据库函数，如 `NOW()` default 和 default_raw 同时存在 default_raw 优先级高*/
    default_raw?: string;

    example?: any;
    /** Increment, UUID,...*/
    generate?: string; //
    /**字段加密存储方式。许可值 `AES(MySQL Only)`, `PASSWORD`*/
    crypt?: string;
    /**字段校验规则*/
    validations?: Validation[];
    /**字段是否为索引，默认为 false*/
    index?: boolean;
    /**字段是否为唯一索引，默认为 false , 如为 true 无需同时将 `index` 设置为 true*/
    unique?: boolean;
    /**字段是否为主键，每张表至多一个主键字段。默认为 false*/
    primary?: boolean;

    /**额外的配置属性 */
    props?: { [key: string]: any };
    /**模型元数据 */
    // model?: ModelDSL | undefined;
  }

  // Validation the field validation struct
  export interface Validation {
    /**校验方法名称，可选值 `typeof`, `pattern`, `min`,`max`,`enum`,`minLength`,`maxLength`,  `email`,`mobile`
     *
     *typeof    | `[<string>]` 许可值 `string`, `integer`, `float`, `number`, `datetime`, `timestamp`
     *
     *min       | `[<number\|float>]`
     *
     *max       | `[<number\|float>]`
     *
     *enum      | `[string...]`
     *
     *pattern   | `[string]`
     *
     *minLength | `[<number>]`
     *
     *maxLength | `[<number>]`
     *
     *email     | `邮件地址格式username@domain`
     *
     *mobile    | `[<string>]` 电话
     *
     */
    method:
      | "typeof"
      | "min"
      | "max"
      | "enum"
      | "pattern"
      | "minLength"
      | "maxLength"
      | "email"
      | "mobile";
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
    /**备注 */
    comment?: string;
    /**名称 */
    name?: string;
    /**列名 */
    columns?: string[];
    /**类型 primary,unique,index,match*/
    type?: string;
  }

  // Table the model mapping table in DB
  export interface Table {
    /**显示标签 */
    label?: string;
    /**数据表名称，if not set the default is generate from model name. eg name.space.user, table name is name_space_user*/
    name?: string;
    /**表名前缀 */
    prefix?: string;
    /**数据表注释中文名*/
    comment?: string;
    /**数据表引擎(MySQL ONLY) 许可值 `InnoDB`, `MyISAM`*/
    engine?: string;
    /** (MySQL ONLY) */
    collation?: string;
    /** (MySQL ONLY) */
    charset?: string;
    /**未知 */
    primaryKeys?: string[];
  }

  // Relation the new xun model relation
  export interface Relation {
    // name: string;
    /**标题 */
    label?: string;
    /**与当前数据模型的关系类型. `hasOne` 一对一, `hasMany` 一对多。*/
    type: "hasOne" | "hasMany" | "hasOneThrough";
    /** **关联数据模型** 字段的名称，用于关联映射 (关联数据模型.key = 当前数据模型.foreign)*/
    key: string;
    /** **关联数据模型** 名称*/
    model: string;
    /** **当前数据模型** 字段的名称，用于关联映射 (关联数据模型.key = 当前数据模型.foreign)*/
    foreign: string;
    /**连接，未知 */
    links?: Relation[];
    /** **关联数据模型** 的查询条件，可以在查询时重载。 例: `{ "select": ["id", "name"] }`*/
    query?: YaoQuery.QueryDSL;
  }

  // Option 模型配置选项
  export interface ModelOption {
    /**created_at, updated_at 字段 */
    timestamps?: boolean;
    /**deleted_at 字段 */
    soft_deletes?: boolean;
    /**created_by, updated_by, deleted_by 字段 */
    trackings?: boolean;
    /**约束定义 */
    constraints?: boolean;
    /**__permission 字段 */
    permission?: boolean;
    /**__logging_id 字段 */
    logging?: boolean;
    /**Ignore the migrate operation */
    read_only?: boolean;
  }

  // ColumnMap ColumnMap 字段映射
  //   export interface ColumnMap {
  //     column?: Column;
  //     model?: ModelDSL;
  //     export?: string; // 取值时的变量名
  //   }

  // ExportData the export data struct
  /**
   * 导出/导入数据的模型，结构，数据值
   */
  export interface ExportData {
    /**模型名称 */
    model?: string;
    /**模型的列名 */
    columns?: string[];
    /**模型的值 */
    values?: any[][];
  }
}
