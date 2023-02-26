export namespace YaoWebSocket {
  export interface Server {
    name?: string;
    description?: string;
    version?: string;
    protocols?: string[];
    guard?: string;
    buffer?: BufferSize;
    limit?: Limit;
    timeout?: number;
    process?: string;
  }

  // WebSocket the websocket struct
  export interface Client extends WSClientOption {
    event?: WebSocketEvent;
    // Client: WSClient;
  }

  // WebSocketEvent the websocket  struct
  export interface WebSocketEvent {
    data?: string;
    error?: string;
    closed?: string;
    connected?: string;
  }
  export interface WSClientOption {
    name?: string;
    description?: string;
    version?: string;
    url?: string;
    protocols?: string[];
    guard?: string;
    buffer?: BufferSize;
    timeout?: number;
    ping?: number;
    keepAlive?: number;
    attemptAfter?: number;
    attempts?: number;
    timestamp?: number;
    ip?: string;
    port?: number;
  }

  export interface BufferSize {
    read?: number;
    write?: number;
  }

  export interface Limit {
    writeWait?: number;
    pongWait?: number;
    maxMessage?: number;
  }
}
