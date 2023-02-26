export namespace YaoConnector {
  export enum ConnectorEnum {
    mysql = "mysql",
    sqlite = "sqlite",
    sqlite3 = "sqlite3",
    postgres = "postgres",
    oracle = "oracle",
    redis = "redis",
    mongo = "mongo",
    // elasticsearch = "elasticsearch",
    // es = "es",
    // kafka = "kafka",
    // script = "script",
  }
  export interface ConnectorDSL {
    type: string | ConnectorEnum;
    name?: string;
    label?: string;
    version?: string;
    options?: { [key: string]: any };
    $schema?: string;
  }
}
