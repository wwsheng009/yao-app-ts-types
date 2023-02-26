export namespace YaoHttp {
  // API 数据接口
  // export interface API {
  //   id: string;
  //   // name: string;
  //   // source: string;
  //   // type: string;
  //   http: HttpDSL;
  // }

  // HTTP http 协议服务
  export interface HttpDSL {
    name: string;
    version: string;
    description?: string;
    group?: string;
    guard?: string;
    paths?: Path[];
  }

  // Path HTTP Path
  export interface Path {
    label?: string;
    description?: string;
    path: string;
    method: string;
    process: string;
    guard?: string;
    in?: string[];
    out?: Out;
  }

  // Out http 输出
  export interface Out {
    status: number;
    type?: string;
    body?: any;
    headers?: { [key: string]: string };
    redirect?: Redirect;
  }

  // Redirect out redirect
  export interface Redirect {
    code?: number;
    location?: string;
  }

  // Server API 服务配置
  export interface Server {
    debug?: boolean;
    port?: number;
    host?: string;
    root?: string; // API 根目录
    allows?: string[]; // 许可跨域访问域名
  }

  // UploadFile upload file
  export interface UploadFile {
    name: string;
    tempFile: string;
    size: number;
    header: { [key: string]: string };
  }
}
