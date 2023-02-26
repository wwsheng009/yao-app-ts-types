export namespace YaoRest {
  // REST The RESTFul API
  export interface RestDSL {
    name: string;
    version: string;
    // group?: string;
    description?: string;
    guard?: string;
    paths?: Path[];
  }

  // Path The RESTFul API Route path
  export interface Path {
    label?: string;
    description?: string;
    path: string;
    method: string;
    process: string;
    guard?: string;
    in?: any[];
    out?: Out;
  }

  // Out The RESTFul API output
  export interface Out {
    status: number;
    type?: string;
    headers?: { [key: string]: string };
  }

  // Option the server option
  // export interface Option {
  //   mode?: string; // the server mode production / development
  //   root?: string; // the root route path of the RESTFul API server
  // }
}
