export namespace YaoWebSocket {
  // export type WebSocket = Server | Client;

  export interface Server {
    /**名称 */
    name?: string;
    /**描述 */
    description?: string;
    /**版本 */
    version?: string;
    /**ws协议 */
    protocols?: string[];

    guard?: string;
    /**接收的缓存区大小，按字节算 */
    buffer?: BufferSize;
    /**限制 */
    limit?: Limit;
    /**ws连接超时时间（秒），默认5秒 */
    timeout?: number;
    /**ws消息处理器 */
    process?: string;
    $schema?: string;
  }

  // WebSocket the websocket struct
  export interface Client extends WSClientOption {
    /**ws事件处理 */
    event?: WebSocketEvent;
    // Client: WSClient;
    $schema?: string;
  }

  // WebSocketEvent the websocket  struct
  /**客户端事件处理 */
  export interface WebSocketEvent {
    /**ws数据连接回调处理器 */
    data?: string;
    /**ws连接错误时回调处理器 */
    error?: string;
    /**ws连接关闭时回调处理器 */
    closed?: string;
    /**ws连接后回调处理器 */
    connected?: string;
  }
  export interface WSClientOption {
    /**版本【管理字段】 */
    version?: string;
    /**描述【管理字段】 */
    decription?: string;
    /**备注【管理字段】 */
    comment?: string;
    /**名称 */
    name?: string;
    /**描述 */
    description?: string;
    /**地址 */
    url?: string;
    /**协议 */
    protocols?: string[];
    guard?: string;
    /**缓存设置 */
    buffer?: BufferSize;
    /**超时设置（秒），默认5*/
    timeout?: number;
    /**ping超时（秒），默认2592000 */
    ping?: number;
    /**-1 not keep alive, 0 keep alive always, keep alive n seconds. */
    keep?: number;
    /**多久时间后多试连接（秒），默认50 */
    attempt_after?: number;
    /** max times try to reconnect server when connection break (client mode only) */
    attempts?: number;
    /**时间戳 */
    timestamp?: number;
    /**ip地址 */
    ip?: string;
    /**端口号 */
    port?: number;
  }

  export interface BufferSize {
    /**读取缓存区大小（大小），默认1024 */
    read?: number;
    /**写入缓存区大小（字节），默认1024 */
    write?: number;
  }

  export interface Limit {
    /**写等待（秒），默认10 */
    "write-wait"?: number;
    /**回应等待（秒），默认60 */
    "pong-wait"?: number;
    /**最大消息大小限制，单位字节，默认1024 */
    "max-message"?: number;
  }
}
