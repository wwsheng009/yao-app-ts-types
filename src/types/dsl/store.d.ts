export namespace YaoStore {
  // Store the kv-store setting
  export interface Store {
    /**版本【管理字段】 */
    version?: string;
    /**描述【管理字段】 */
    decription?: string;
    /**备注【管理字段】 */
    comment?: string;
    /**名称 */
    name: string;
    /**描述 */
    description?: string;
    /**绑定连接器名称(连接器) Yao v0.10.2+ */
    connector?: string;
    /**类型 `lru` LRU 缓存 (connector 为空时有效) */
    type?: string; // warning: type is deprecated in the future new version
    /**配置项 `{"size":10240}` type 为 `lru` 时有效， size 为 LRU 缓存大小 */
    option?: { [key: string]: any };
    $schema?: string;
  }
}
