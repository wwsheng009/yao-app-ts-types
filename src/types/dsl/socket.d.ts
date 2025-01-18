export namespace YaoSocket {
  //   export interface Option {
  //     protocol?: string; // TCP/UDP
  //     host?: string;
  //     port?: string;
  //     timeout?: number; // timeout (seconds)
  //     bufferSize?: number; // bufferSize
  //     keepAlive?: number; // -1 not keep alive, 0 keep alive always, keep alive n seconds.
  //     attemptAfter?: number; // Attempt attempt_after
  //     attempts?: number; // max times try to reconnect server when connection break (client mode only)
  //   }

  // Socket struct
  export interface Socket {
    /**版本【管理字段】 */
    version?: string;
    /**描述【管理字段】 */
    decription?: string;
    /**备注【管理字段】 */
    comment?: string;
    name: string;
    mode?: "server" | "client"; // Server | client
    description?: string;
    protocol?: string;
    host?: string;
    port?: string;
    event?: SocketEvent;
    timeout?: number; // timeout (seconds)
    buffer?: number; // bufferSize
    keep?: number; // -1 not keep alive, 0 keep alive always, keep alive n seconds.
    process?: string;
    attempt_after?: number; // Attempt attempt_after
    attempts?: number; // max times try to reconnect server when connection break (client mode only)
    // client?: SocketIOClient;
    $schema?: string;
  }

  // SocketEvent struct
  export interface SocketEvent {
    data?: string;
    error?: string;
    closed?: string;
    connected?: string;
  }
}
