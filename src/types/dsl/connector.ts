export namespace YaoConnector {
  export enum ConnectorEnum {
    "mysql",
    "sqlite",
    "sqlite3",
    "postgres",
    // "oracle",
    "redis",
    "mongo",
    "hdb",
    // elasticsearch = "elasticsearch",
    // es = "es",
    // kafka = "kafka",
    // script = "script",
  }
  export interface ConnectorDSL {
    /**版本【管理字段】 */
    version?: string;
    /**描述【管理字段】 */
    decription?: string;
    /**备注【管理字段】 */
    comment?: string;
    /**连接器类型, 当前支持 `mysql`, `sqlite3`, `mongo` 和 `redis` */
    type: string | ConnectorEnum;
    /**连接器名称 */
    name?: string;
    /**标签显示 */
    label?: string;

    /**连接器配置项 */
    options?: // | { [key: string]: any }
    MySqlOption | RedisOption | Sqlite3Option | MongoDBOption;
    $schema?: string;
  }

  export interface MySqlOption {
    /**数据库名称, 支持使用`$EVN.变量名` 读取环境变量 */
    db: string;
    /**MySQL charset   */
    chartset?: string;
    /**MySQL collation */
    collation?: string;
    /**解析时间 */
    parseTime?: boolean;
    /**服务器列表 */
    hosts?: DBHost[];
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
    file: string;
  }

  export interface MongoDBOption {
    /**数据库名称, 支持使用`$EVN.变量名` 读取环境变量 */
    db: string;
    /**服务器列表 */
    hosts?: DBHost[];
    /**连接参数 */
    params?: { [key: string]: any };
  }

  /**服务器列表 */
  export interface DBHost {
    /**MySQL Host, 支持使用`$EVN.变量名` 读取环境变量 */
    host: string;
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
