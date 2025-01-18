export namespace YaoConnector {
  export type ConnectorEnum =
    | "mysql"
    | "sqlite"
    | "sqlite3"
    | "postgres"
    | "redis"
    | "mongo"
    | "openai"
    | "hdb";

  export interface ConnectorDSL {
    /**语言 */
    lang?: string;
    /**版本【管理字段】 */
    version?: string;
    /**描述【管理字段】 */
    decription?: string;
    /**备注【管理字段】 */
    comment?: string;
    /**连接器类型, 当前支持 `mysql`, `sqlite3`, `mongo` 和 `redis` */
    type: ConnectorEnum;
    /**连接器名称 */
    name?: string;
    /**标签显示 */
    label?: string;
    /**连接器配置项 */
    options?:
      | XunOption
      | RedisOption
      | Sqlite3Option
      | MongoDBOption
      | OpenAIOption;

    $schema?: string;
  }

  export interface XunOption {
    /**数据库名称, 支持使用`$EVN.变量名` 读取环境变量 */
    db?: string;
    /**表前缀 */
    prefix?: string;
    /**MySQL charset   */
    charset?: string;
    /**MySQL collation */
    collation?: string;
    /**解析时间 */
    parseTime?: boolean;
    /**连接超时 */
    timeout?: boolean;
    /**sqlite3数据库文件地址, 支持使用`$EVN.变量名` 读取环境变量*/
    file?: string;
    /**其它参数 */
    params?: { [key: string]: any };
    /**服务器列表 */
    hosts?: XunDBHost[];
  }

  export interface RedisOption {
    /**Redis Host, 支持使用`$EVN.变量名` 读取环境变量 */
    host?: string;
    /**Redis Port, 支持使用`$EVN.变量名` 读取环境变量   */
    port?: string;
    /**Redis User name, 支持使用`$EVN.变量名` 读取环境变量*/
    user?: string;
    /**Redis Password, 支持使用`$EVN.变量名` 读取环境变量 */
    pass?: string;
    /**Redis DB, 支持使用`$EVN.变量名` 读取环境变量 */
    db?: string;
  }
  export interface Sqlite3Option {
    /**数据库文件地址, 支持使用`$EVN.变量名` 读取环境变量 */
    file?: string;
  }

  export interface MongoDBOption {
    /**数据库名称, 支持使用`$EVN.变量名` 读取环境变量 */
    db?: string;
    /**连接超时 */
    timeout?: boolean;
    /**服务器列表 */
    hosts?: MongoHost[];
    /**连接参数 */
    params?: { [key: string]: any };
  }

  export interface OpenAIOption {
    /**api.openai.com对应的代理网站 */
    proxy?: string;
    /**open ai模型*/
    model?: string;
    /**openai 接口调用token key */
    key?: string;
  }
  /**服务器列表 */
  export interface MongoHost {
    /**MySQL Host, 支持使用`$EVN.变量名` 读取环境变量 */
    host?: string;
    /**MySQL Port, 支持使用`$EVN.变量名` 读取环境变量 */
    port?: string;
    /**MySQL User name, 支持使用`$EVN.变量名` 读取环境变量 */
    user?: string;
    /**MySQL Password, 支持使用`$EVN.变量名` 读取环境变量 */
    pass?: string;
  }
  /**服务器列表 */
  export interface XunDBHost {
    /**MySQL Host, 支持使用`$EVN.变量名` 读取环境变量 */
    host?: string;
    /**MySQL Port, 支持使用`$EVN.变量名` 读取环境变量 */
    port?: string;
    /**MySQL User name, 支持使用`$EVN.变量名` 读取环境变量 */
    user?: string;
    /**MySQL Password, 支持使用`$EVN.变量名` 读取环境变量 */
    pass?: string;
    /**`true` 为主库, `false`为从库 */
    primary?: boolean;
  }
}
