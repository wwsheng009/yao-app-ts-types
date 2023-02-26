/**
 * 处理器的编辑器语法提示，带有_ID_提示的处理器需要自行替换对象。
 */
export namespace ProcessEnum {
  /**一组实用程序处理器 */
  export namespace Utils {
    /**应用 */
    export enum App {
      /** Ping服务器*/
      Ping = "utils.app.Ping",
      /** 读取服务器的状态*/
      Inspect = "utils.app.Inspect",
    }
    /**输入输出 */
    export enum Fmt {
      Print = "utils.fmt.Print",
    }
    /**环境变量 */
    export enum Env {
      Get = "utils.env.Get",
      Set = "utils.env.Set",
      GetMany = "utils.env.GetMany",
      SetMany = "utils.env.SetMany",
    }
    /**流程控制 */
    export enum Flow {
      For = "utils.flow.For",
      Each = "utils.flow.Each",
      Range = "utils.flow.Range",
      Case = "utils.flow.Case",
      IF = "utils.flow.IF",
      Return = "utils.flow.Return",
    }
    /**JWT */
    export enum Jwt {
      Make = "utils.jwt.Make",
      Verify = "utils.jwt.Verify",
    }
    /**密码 */
    export enum Pwd {
      Hash = "utils.pwd.Hash",
      Verify = "utils.pwd.Verify",
    }
    /**图形/音频验证码 */
    export enum Captcha {
      Make = "utils.captcha.Make",
      Verify = "utils.captcha.Verify",
    }
    /**String */
    export enum Str {
      /**`[<...str>]`连接字符串 */
      Concat = "utils.str.Concat",
      /**`[<字符串数组>, <分隔符>]` 连接字符串*/
      Join = "utils.str.Join",
      /**`[<...path>]` 连接文件目录*/
      JoinPath = "utils.str.JoinPath",
    }

    /**日期时间 */
    export enum Time {
      /**`[<毫秒>]` Sleep 单位 ms  */
      Sleep = "utils.time.Sleep",
    }
    /**日期时间*/
    export enum Now {
      /**当前时刻时间戳 (秒)*/
      Timestamp = "utils.now.Timestamp",
      /**当前时刻时间戳 (毫秒)*/
      Timestampms = "utils.now.Timestampms",
      /**当前时刻日期 2022-01-23*/
      Date = "utils.now.Date",
      /**当前时刻日期 2022-01-23 08:33:00*/
      DateTime = "utils.now.DateTime",
      /**当前时刻日期 08:33:00*/
      Time = "utils.now.Time",
    }

    /**Array*/
    export enum Arr {
      Pluck = "utils.arr.Pluck",
      Split = "utils.arr.Split",
      Tree = "utils.arr.Tree",
      Unique = "utils.arr.Unique",
      Indexes = "utils.arr.Indexes",
      Get = "utils.arr.Get",
    }
    /**Map*/
    export enum Map {
      /** 字典读取 */
      Get = "utils.map.Get",
      Set = "utils.map.Set",
      Del = "utils.map.Del",
      DelMany = "utils.map.DelMany",
      Keys = "utils.map.Keys",
      Values = "utils.map.Values",
      Merge = "utils.map.Merge",
    }
  }

  export namespace Task {}

  /**
   * SSL 签名校验处理器
   */
  export enum SSL {
    /**`[<Source>, <证书 ID (PEM 私钥)>, "<算法>"]`|生成签名字符串(Base64)|生成签名字符串|*/
    Sign = "ssl.Sign",
    /**`[ <Source>, "<签名字符串>", <证书 ID (PEM 公钥/证书)>, <算法>]`|有效返回 `true`, 无效返回 `false`|校验签名字符串|*/
    Verify = "ssl.Verify",
  }
  /**
   * 数据表结构操作处理器
   *
   * ！！！请自行替换成ID字符串
   */
  export namespace Schema {
    export enum ID {
      /**`[<数据库名称>]`|-|创建一个数据库(或 Schema)|*/
      Create = "schemas.<ID>.Create",
      /**`[<数据库名称>]`|-|删除一个数据库(或 Schema)|*/
      Drop = "schemas.<ID>.Drop",
      /**`[<数据表前缀(可选)>]`|数据表名称数组|读取数据表, 返回数据表名称数组|*/
      Tables = "schemas.<ID>.Tables",
      /**`[<数据表名称>]`|数据表结构信息|读取数据表结构, 返回数据表结构信息|*/
      TableGet = "schemas.<ID>.TableGet",
      /**`[<数据表名称>, <数据表结构>]`|-|创建一张数据表|*/
      TableCreate = "schemas.<ID>.TableCreate",
      /**`[<数据表名称>, <数据表结构>]`|-|保存一张数据表, 不存在创建, 存在更新|*/
      TableSave = "schemas.<ID>.TableSave",
      /**`[<数据表名称>]`|-|删除一张数据表|*/
      TableDrop = "schemas.<ID>.TableDrop",
      /**`[<数据表名称>, <新数据表名称>]`|-|数据表改名|*/
      TableRename = "schemas.<ID>.TableRename",
      /**`[<数据表结构>, <另一个数据表结构>]`|两个表结构差异|比较两个表结构, 返回两张表差异信息|*/
      TableDiff = "schemas.<ID>.TableDiff",
      /**`[<数据表名称>, <字段结构>]`|-|给数据表添加一个字段|*/
      ColumnAdd = "schemas.<ID>.ColumnAdd",
      /**`[<数据表名称>, <字段结构>]`|-|更新字段结构,如字段不存在则添加一个字段|*/
      ColumnAlt = "schemas.<ID>.ColumnAlt",
      /**`[<数据表名称>, <字段名称>]`|-|删除一个字段|*/
      ColumnDel = "schemas.<ID>.ColumnDel",
      /**`[<数据表名称>, <索引结构>]`|-|添加一个索引|*/
      IndexAdd = "schemas.<ID>.IndexAdd",
      /**`[<数据表名称>, <索引名称>]`|-|删除一个索引|*/
      IndexDel = "schemas.<ID>.IndexDel",
    }
  }

  export namespace Import {}

  /**
   * HTTP 请求处理器
   */
  export enum Http {
    /**`[<URL>, <Query (可选)>, <Headers (可选)>]`|响应结果|发送 HTTP GET 请求|*/
    Get = "http.Get",
    /**`[<URL>, <Payload (可选)>, <Files (可选)>, <Query(可选)>, <Headers (可选)>]`|响应结果|发送 HTTP POST 请求|*/
    Post = "http.Post",
    /**`[<URL>, <Payload (可选)>, <Query (可选)>, <Headers (可选)>]`|响应结果|发送 HTTP HEAD 请求|*/
    Head = "http.Head",
    /**`[<URL>, <Payload (可选)>, <Query(可选)>, <Headers (可选)>]`|响应结果|发送 HTTP PUT 请求|*/
    Put = "http.Put",
    /**`[<URL>, <Payload (可选)>, <Query(可选)>, <Headers (可选)>]`|响应结果|发送 HTTP PATCH 请求|*/
    Patch = "http.Patch",
    /**`[<URL>, <Payload (可选)>, <Query(可选)>, <Headers (可选)>]`|响应结果|发送 HTTP DELETE 请求|*/
    Delete = "http.Delete",
    /**`[<METHOD>, <URL>, <Query (可选)>, <Payload (可选)>, <Headers (可选)>]`|响应结果|发送 HTTP POST 请求, 返回 JSON 数据|*/
    Send = "http.Send",
  }
  /**
   * yao table /form
   */
  export namespace yao {
    /**
     * Table Widget 处理器
     */
    export enum Table {
      /**`[<Widget ID>]`|返回表格配置|返回表格 DSL 信息|*/
      Setting = "yao.table.Setting",
      /**`[<Widget ID>]`|返回表格配置|返回表格配置信息, 用于 XGEN 界面引擎页面渲染|*/
      Xgen = "yao.table.Xgen",
      /**`[<Widget ID>, <查询参数>, <当前页码>, <每页显示记录>]`|返回带有分页信息和记录数组|调用关联处理器，查询表格数据列表|*/
      Search = "yao.table.Search",
      /**`[<Widget ID>, <查询参数>]`|返回记录数组|调用关联处理器，查询表格数据列表|*/
      Get = "yao.table.Get",
      /**`[<Widget ID>, <主键>,<查询参数>]`|返回记录|调用关联处理器，按主键查询表格数据详情|*/
      Find = "yao.table.Find",
      /**`[<Widget ID>, <记录>]`|主键|调用关联处理器，保存一条数据记录，参数包含主键则更新，否则创建|*/
      Save = "yao.table.Save",
      /**`[<Widget ID>, <记录>]`|主键|调用关联处理器，创建数据记录|*/
      Create = "yao.table.Create",
      /**`[<Widget ID>, <主键>]`|返回记录|调用关联处理器，按主键删除记录|*/
      Delete = "yao.table.Delete",
      /**`[<Widget ID>, <字段名称数组>, <二维记录值数组>]`|主键|调用关联处理器，插入多条记录|*/
      Insert = "yao.table.Insert",
      /**`[<Widget ID>, <主键>,<记录>]`|返回更新行|调用关联处理器，更新单条记录|*/
      Update = "yao.table.Update",
      /**`[<Widget ID>, <查询参数>,<记录>]`|返回更新行|调用关联处理器，更新符合查询条件记录|*/
      UpdateWhere = "yao.table.UpdateWhere",
      /**`[<Widget ID>, <主键数组>,<记录>]`|返回更新行|调用关联处理器，更新指定主键的数据记录|*/
      UpdateIn = "yao.table.UpdateIn",
      /**`[<Widget ID>, <查询参数>]`|返回更新行|调用关联处理器，删除符合查询条件记录|*/
      DeleteWhere = "yao.table.DeleteWhere",
      /**`[<Widget ID>, <主键数组>]`|返回更新行|调用关联处理器，删除指定主键的数据记录|*/
      DeleteIn = "yao.table.DeleteIn",
    }
    /**
     * From Widget 处理器
     */
    export enum Form {
      /**`[<Widget ID>]`|返回表单配置|返回表单 DSL 信息|*/
      Setting = "yao.form.Setting",
      /**`[<Widget ID>]`|返回表单配置|返回表单配置信息, 用于 XGEN 界面引擎页面渲染|*/
      Xgen = "yao.form.Xgen",
      /**`[<Widget ID>, <主键>,<查询参数>]`|返回记录|调用关联处理器，按主键查询表单数据详情|*/
      Find = "yao.form.Find",
      /**`[<Widget ID>, <记录>]`|主键|调用关联处理器，保存一条数据记录，参数包含主键则更新，否则创建|*/
      Save = "yao.form.Save",
      /**`[<Widget ID>, <记录>]`|主键|调用关联处理器，创建数据记录|*/
      Create = "yao.form.Create",
      /**`[<Widget ID>, <主键>]`|返回记录|调用关联处理器，按主键删除记录|*/
      Delete = "yao.form.Delete",
      /**`[<Widget ID>, <主键>,<记录>]`|返回更新行|调用关联处理器，更新单条记录|*/
      Update = "yao.form.Update",
    }
    export enum List {
      Setting = "yao.list.Setting",
      Xgen = "yao.list.Xgen",
      Component = "yao.list.Component",
      Upload = "yao.list.Upload",
      Download = "yao.list.Download",
      Save = "yao.list.Save",
    }
    /**
     * App Widget 处理器
     */
    export enum App {
      /**|返回应用配置信息|读取应用配置|*/
      setting = "yao.app.setting",
      /**|返回菜单|读取应用菜单|*/
      menu = "yao.app.menu",
      /**`[<图标文件名>]`|返回图标文件数据|读取图标文件目录下文件数据 `/data/app/icons/<图标文件名>`|*/
      icons = "yao.app.icons",
    }
    /**
     * Chart Widget 处理器
     */
    export enum Chart {
      /**`[<Widget ID>]`|返回图表配置|返回图表 DSL 信息|*/
      Setting = "yao.chart.Setting",
      /**`[<Widget ID>]`|返回图表Xgen配置|*/
      Xgen = "yao.chart.Xgen",
      /**`[<Widget ID>]`|chart,xpath,method|*/
      Component = "yao.chart.Component",
      /**`[<Widget ID>, ...<自定义参数表>]`|返回各个图表统计结果|调用关联处理器，查询图表统计结果|*/
      Data = "yao.chart.Data",
    }
    /**
     * 内建组件相关处理器。一般作为 Cloud Props 处理器
     */
    export enum Component {
      /**
       * ```json
       * {
       * "model":"<Model Widget ID>",
       * "label":"<label 字段名称(可选,默认name)>",
       * "value":"<value 字段名称(可选,默认id)>"
       * "wheres":[...<查询条件(可选)>],
       * "limit":"<返回记录数量(可选, 默认500)>"
       * }
       * ```
       * |`<Select组件 props.options 数组>`|返回 Select 组件 `Options`|*/
      SelectOptions = "yao.component.SelectOptions",
    }
    export enum Login {
      /**`[<用户登录表单数据>]`|返回登录信息|查询 `xiang.user` 模型( `xiang_user` 数据表), 检查用户邮箱密码，验证用户登录并返回登录信息|*/
      Admin = "yao.login.Admin",
    }
  }
  /**
   * Login Widget 处理器
   */
  export namespace Fs {
    export enum System {
      /** `[<文件名>]`|文件内容(String)|读取文件内容, 用于文本文件*/
      ReadFile = "fs.system.ReadFile       ",
      /**`[<文件名>]`|文件内容([]Byte/Unit8Array)|读取文件内容,用于二进制文件*/
      ReadFileBuffer = "fs.system.ReadFileBuffer",
      /**`[<文件名>,<文件内容(String)>,<文件权限(可选)>]`|文件字节数|写入文本文件,返回文件字节数*/
      WirteFile = "fs.system.WirteFile",
      /**`[<文件名>,<文件内容([]Byte/Unit8Array)>,<文件权限(可选)>]`|文件字节数|写入二进制文件,返回文件字节数*/
      WirteFileBuffer = "fs.system.WirteFileBuffer",
      /**`[<目录称>,<递归(可选,默认false)>]`|文件名数组|读取文件夹下所有文件,返回文件名数组*/
      ReadDir = "fs.system.ReadDir",
      /**`[<目录称>,<目录权限(可选)>]`|-|创建文件目录*/
      Mkdir = "fs.system.Mkdir",
      /**`[<目录称>,<目录权限(可选)>]`|-|创建文件目录(含子目录)*/
      MkdirAll = "fs.system.MkdirAll",
      /**`[<根目录(可选)>,<命名规则(可选)>]`|文件夹路径|创建临时文件目录*/
      MkdirTemp = "fs.system.MkdirTemp",
      /**`[<文件名>]`||删除文件或目录*/
      Remove = "fs.system.Remove",
      /**`[<文件名>]`||删除文件或目录(含目录下文件或目录)*/
      RemoveAll = "fs.system.RemoveAll",
      /**`[<文件名>]`|存在返回true,否则返回false|检查文件或目录是否存在*/
      Exists = "fs.system.Exists",
      /**`[<文件名>]`|文件名是为目录true,否则返回false|检查文件名是否为目录*/
      IsDir = "fs.system.IsDir",
      /**`[<文件名>]`|文件名是为文件true,否则返回false|检查文件名是否为文件*/
      IsFile = "fs.system.IsFile",
      /**`[<文件名>]`|文件名是为符号链接true,否则返回false|检查文件名是否为符号链接*/
      IsLink = "fs.system.IsLink",
      /**`[<文件名>]`|文件字节数|读取文件字节数*/
      Size = "fs.system.Size",
      /**`[<文件名>]`|文件权限(Uint)|读取文件权限*/
      Mode = "fs.system.Mode",
      /**`[<文件名>]`|时间戳|读取文件修改时间*/
      ModeTime = "fs.system.ModeTime",
      /**`[<文件名>,<文件权限>]`|-|修改文件权限*/
      Chmod = "fs.system.Chmod",
      /**`[<文件名>]`|文件BaseName|读取BaseName*/
      BaseName = "fs.system.BaseName",
      /**`[<文件名>]`|文件所在目录|读取文件所在目录*/
      DirName = "fs.system.DirName",
      /**`[<文件名>]`|文件扩展名|读取文件扩展名*/
      ExtName = "fs.system.ExtName",
      /**`[<文件名>]`|文件MIME-TYPE|读取文件MIME-TYPE*/
      MimeType = "fs.system.MimeType",
      /**`[<文件名>,<目标文件名>]`|-|移动文件或目录(含子文件)*/
      Move = "fs.system.Move",
      /**`[<文件名>,<目标文件名>]`|-|复制文件或目录(含子文件)*/
      Copy = "fs.system.Copy",
      /**`[<临时文件>]`|文件地址|上传文件*/
      Upload = "fs.system.Upload",
      /**`[<文件名>]`|文件地址|下载文件*/
      Download = "fs.system.Download",
    }
  }
  /**编码解码处理器*/
  export namespace Encoding {
    /**Base64*/
    export enum Base64 {
      /**`[<Source>]` Base64 编码字符串*/
      Encode = "encoding.base64.Encode",
      /**`[<Base64Code>]` 原始字符串*/
      Decode = "encoding.base64.Decode",
    }
    /**十六进制*/
    export enum Hex {
      /**`[<Source>]` 十六进制编码字符串*/
      Encode = "encoding.hex.Encode",
      /**`[<HexCode>]` 原始字符串 */
      Decode = "encoding.hex.Decode",
    }
    /**JSON*/
    export enum Json {
      /**`[<SourceData>]` JSON 字符串*/
      Encode = "encoding.json.Encode",
      /**`[<JSON>]`  原始数据  */
      Decode = "encoding.json.Decode",
    }
  }
  /**
   * 加密解密处理器
   */
  export enum Crypto {
    /**`[<算法>, <Source>]`|Hash String|Hash|*/
    Hash = "crypto.Hash",
    /**`[<算法>, <Source>, <Key>, <Encoding(可选)>]`|HMAC Hash String|HAMC Hash|*/
    Hmac = "crypto.Hmac",
  }
  // /**
  //  * 内建 Compute 处理器。在 Table, Form, Chart, 等 Widget 中使用时,可忽略命名空间, 填写处理器名称即可
  //  */
  // export enum compute {
  //   /**`[<字符串参数>]`|`<字符串参数>`|读取数值|*/
  //   Get = "Get",
  //   /**`[<字符串参数>]`||过滤首尾空格|*/
  //   Trim = "Trim",
  //   /**`[...<字符串参数>]`|`"value1value2.."`|连接字符串|*/
  //   Concat = "Concat",
  //   /**`[]`|`""` 空字符串|返回空字符串|*/
  //   Hide = "Hide",
  //   /**||将路径转换为下载地址|*/
  //   Download = "Download",
  //   /**||将下载地址转换为路径|*/
  //   Upload = "Upload",
  // }

  /**
   * Schema operations
   */
  export namespace Schema {
    /** Default Connector */
    export enum Default {
      Create = "schema.default.Create",
      Drop = "schema.default.Drop",

      Tables = "schema.default.Tables",
      TableGet = "schema.default.TableGet",
      TableCreate = "schema.default.TableCreate",
      TableDrop = "schema.default.TableDrop",
      TableRename = "schema.default.TableRename",
      TableDiff = "schema.default.TableDiff",
      TableSave = "schema.default.TableSave",

      ColumnAdd = "schema.default.ColumnAdd",
      ColumnAlt = "schema.default.ColumnAlt",
      ColumnDel = "schema.default.ColumnDel",

      IndexAdd = "schema.default.IndexAdd",
      IndexDel = "schema.default.IndexDel",
    }
  }

  export namespace Plugins {
    /**
     * ！！！不要直接使用，请自行替换成ID
     */
    export enum _ID_ {
      /**
       * ！！！不要直接使用，请自行替换成操作
       */
      Operation = "plugins.<ID>.<Operation>",
    }
  }
  export namespace Flows {
    /**
     * ！！！不要直接使用，请自行替换成ID
     */
    export enum _ID_ {
      /**
       * ！！！不要直接使用，请自行替换成操作
       */
      Operation = "flows.<ID>.<Operation>",
    }
  }
  export namespace Scripts {
    /**
     * ！！！不要直接使用，请自行替换成ID
     */
    export enum _ID_ {
      /**
       * ！！！不要直接使用，请自行替换成操作
       */
      Operation = "scripts.<ID>.<Operation>",
    }
  }
  export namespace Tasks {
    /**
     * ！！！不要直接使用，请自行替换成ID
     */
    export enum _ID_ {
      Add = "tasks.<ID>.Add",
      Progress = "tasks.<ID>.Progress",
      Get = "tasks.<ID>.Get",
    }
  }
  export namespace Schedules {
    /**
     * ！！！不要直接使用，请自行替换成ID
     */
    export enum _ID_ {
      Start = "schedules.<ID>.Start",
      Stop = "schedules.<ID>.Stop",
    }
  }

  /**
   * 会话数据处理器
   */
  export enum Session {
    /**`[]`|会话 ID|生成一个会话 ID|*/
    Start = "session.Start",
    /**`[]`|会话 ID|读取会话 ID|*/
    ID = "session.ID",
    /**`[<Key>]`|数值|读取会话数据|*/
    Get = "session.Get",
    /**`[<Key>, <Value>, <有效期(可选)>]`|-|设置会话数据|*/
    Set = "session.Set",
    /**`[<Data>, <有效期(可选)>]`|-|批量设置会话数据|*/
    SetMany = "session.SetMany",
    /**`[]`|会话数据( Map )|读取所有会话数据|*/
    Dump = "session.Dump",
  }
  /**Key-Value 数据存储处理器 */

  export namespace Store {
    /**
     * ！！！不要直接使用，请自行替换成ID
     */
    export enum _ID_ {
      /**`[<Key>]`|Value|查询给定键的数值|*/
      Get = "stores.<ID>.Get",
      /**`[<Key>, <Value>, <有效期(可选)>]`|-|存储数值|*/
      Set = "stores.<ID>.Set",
      /**`[<Key>]`|存在返回 true, 不存在返回 false|查询给定键是否存在|*/
      Has = "stores.<ID>.Has",
      /**`[<Key>]`|-|删除键|*/
      Del = "stores.<ID>.Del",
      /**`[<Key>]`|Value|查询给定键的数值, 然后删除键|*/
      GetDel = "stores.<ID>.GetDel",
      /**`[]`|键数量|查询存储器键数量|*/
      Len = "stores.<ID>.Len",
      /**`[]`|键名数组|查询所有键名|*/
      Keys = "stores.<ID>.Keys",
      /**`[]`|-|清除所有键|*/
      Clear = "stores.<ID>.Clear",
    }
  }
  /**
   * 数据模型原子操作处理器
   *
   */
  export namespace Models {
    /**
     *  ！！！不要直接使用_ID_，请自行替换成 **模型名称**
     */
    export enum _ID_ {
      /**`[<主键值>,<查询条件>]`|单条记录|查询单条记录|*/
      Find = "models.<ID>.Find",
      /**`[<主键值>,<查询条件>]`|记录数组|按条件查询, 不分页|*/
      Get = "models.<ID>.Get",
      /**`[<查询条件>,<当前页码>, <每页显示记录数>]`|分页信息和记录数组|按条件查询, 分页|*/
      Paginate = "models.<ID>.Paginate",
      /**`[<记录>]`|新记录主键值|创建单条记录, 返回新创建记录 ID|*/
      Create = "models.<ID>.Create",
      /**`[<主键值>,<记录>]`|-|更新单条记录|*/
      Update = "models.<ID>.Update",
      /**`[<记录>]`|记录主键值|保存单条记录, 不存在创建记录, 存在更新记录, 返回记录 ID|*/
      Save = "models.<ID>.Save",
      /**`[<主键值>]`|-|删除单条记录(标记删除)|*/
      Delete = "models.<ID>.Delete",
      /**`[<主键值>]`|-|删除单条记录(真删除)|*/
      Destroy = "models.<ID>.Destroy",
      /**`[<字段名称数组>, <二维记录值数组>]`|成功插入行数|插入多条记录, 返回插入行数|*/
      Insert = "models.<ID>.Insert",
      /**`[<查询条件>,<记录>]`|成功更新行数|按条件更新记录, 返回更新行数|*/
      UpdateWhere = "models.<ID>.UpdateWhere",
      /**`[<查询条件>]`|成功删除行数|按条件删除数据, 返回删除行数(标记删除)|*/
      DeleteWhere = "models.<ID>.DeleteWhere",
      /**`[<查询条件>]`|成功删除行数|按条件删除数据, 返回删除行数(真删除)|*/
      DestroyWhere = "models.<ID>.DestroyWhere",
      /**`[<记录数组>, <记录(共有字段)>]`|创建或更新的记录主键值数组|保存多条记录, 不存在创建记录, 存在更新记录, 返回记录 ID 集合|*/
      EachSave = "models.<ID>.EachSave",
      /**`[<主键值数组>,<记录数组>, <记录(共有字段)>]`|创建或更新的记录主键值数组|删除一组给定 ID 的记录后，保存多条记录, 不存在创建, 存在更新, 返回 ID 集合|*/
      EachSaveAfterDelete = "models.<ID>.EachSaveAfterDelete",
    }
  }
}
